import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import Parser from "rss-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const settingsPath = path.join(projectRoot, "src/content/settings/main.json");
const outputPath = path.join(projectRoot, "src/content/medium/main.json");

const parser = new Parser({
  customFields: {
    item: [
      ["content:encoded", "contentEncoded"],
      ["dc:creator", "creator"],
    ],
  },
});

const getItemContent = (item) =>
  item.contentEncoded ?? item["content:encoded"] ?? item.content ?? "";

const getItemSnippet = (item) =>
  item["content:encodedSnippet"] ?? item.contentSnippet ?? getItemContent(item);

const truncateText = (value, maxLength) => {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trimEnd()}...`;
};

const toPlainText = (value = "") =>
  value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const removeMediumFooter = (value) => {
  const marker = " was originally published in ";
  const footerIndex = value.toLowerCase().lastIndexOf(marker.trim());

  if (footerIndex === -1) {
    return value.trim();
  }

  return value.slice(0, footerIndex).trim();
};

const createExcerpt = (item) => {
  const htmlParagraphs = [...getItemContent(item).matchAll(/<p>([\s\S]*?)<\/p>/gi)]
    .map((match) => toPlainText(match[1]))
    .filter(Boolean)
    .filter((line) => !/^https?:\/\//i.test(line));

  if (htmlParagraphs.length > 0) {
    return truncateText(removeMediumFooter(htmlParagraphs.slice(0, 2).join(" ")), 220);
  }

  const rawSnippet = getItemSnippet(item);
  const cleanedSnippet = removeMediumFooter(toPlainText(rawSnippet));

  return truncateText(cleanedSnippet, 220);
};

const extractThumbnail = (item) => {
  const html = getItemContent(item);
  const imageMatch = html.match(/<img[^>]+src="([^"]+)"/i);

  return imageMatch?.[1] ?? null;
};

const estimateReadingTimeMinutes = (item) => {
  const plainText = removeMediumFooter(toPlainText(getItemContent(item)));
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 200));
};

const fallbackContent = {
  generatedAt: "",
  sourceUrl: "",
  articles: [],
};

const writeFeedFile = async (content) => {
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
};

const settings = JSON.parse(await readFile(settingsPath, "utf8"));
const sourceUrl = settings.mediumFeedUrl;

if (typeof sourceUrl !== "string" || sourceUrl.length === 0) {
  console.warn("Medium feed generation skipped because mediumFeedUrl is missing.");
  await writeFeedFile(fallbackContent);
  process.exit(0);
}

try {
  const feed = await parser.parseURL(sourceUrl);
  const articles = (feed.items ?? []).slice(0, 6).map((item) => ({
    title: item.title ?? "Untitled article",
    link: item.link ?? sourceUrl,
    publishedAt: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
    excerpt: createExcerpt(item),
    categories: Array.isArray(item.categories) ? item.categories.slice(0, 3) : [],
    readingTimeMinutes: estimateReadingTimeMinutes(item),
    thumbnail: extractThumbnail(item),
  }));

  await writeFeedFile({
    generatedAt: new Date().toISOString(),
    sourceUrl,
    articles,
  });
} catch (error) {
  console.warn("Medium feed generation failed. Reusing the existing cached file when available.");

  try {
    await readFile(outputPath, "utf8");
  } catch {
    await writeFeedFile(fallbackContent);
  }

  console.warn(error);
}
