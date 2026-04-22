# Olayiwola Akinnagbe — Portfolio

A personal portfolio website showcasing my work as a Senior Backend Engineer specializing in fintech infrastructure, distributed systems, and API-first architecture.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: React Router v7
- **Styling**: SCSS with custom design tokens
- **Fonts**: Geist (Variable)
- **Icons**: React Icons (Feather)
- **Markdown**: react-markdown with remark-gfm
- **RSS Parsing**: rss-parser (for Medium blog feed)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route pages (Home, About, Projects, NotFound)
├── content/          # JSON content files organized by section
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── skills/
│   ├── education/
│   ├── certifications/
│   ├── medium/
│   └── settings/
├── hooks/            # Custom React hooks
├── context/          # React context (theme)
├── styles/           # SCSS modules and tokens
├── data/             # Data utilities
└── config/           # Configuration files
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Content Management

All portfolio content is stored as JSON in `src/content/`. To update:

- **Hero**: `src/content/hero/main.json`
- **About**: `src/content/about/main.json`
- **Experience**: `src/content/experience/main.json`
- **Projects**: `src/content/projects/main.json`
- **Skills**: `src/content/skills/main.json`
- **Education**: `src/content/education/main.json`

## Features

- Dark/Light theme toggle
- Responsive design
- Animated counters and transitions
- Project filtering by category
- Medium blog feed integration
- PDF CV download
- Impact statistics showcase
- Timeline-based experience display

## Connect

- **GitHub**: https://github.com/Olayiwola72
- **LinkedIn**: https://www.linkedin.com/in/olayiwola-akinnagbe/
- **Twitter**: https://twitter.com/OlayiwolaAkinn1
- **Portfolio**: https://olayiwola-akinnagbe.netlify.app/
- **Resume**: https://drive.google.com/file/d/10Eo_1hJi5EEXSOfAdAJCA14eIY5MbMMI/view

---

## License

MIT