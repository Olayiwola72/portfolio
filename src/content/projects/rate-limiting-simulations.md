---
title: "Rate Limiting Simulations Lab"
description: "An interactive simulation lab for exploring how popular rate limiting algorithms behave under burst and steady traffic conditions."
category: "Backend Systems"
metrics: "Visual rate limiting lab"
tags: ["React", "TypeScript", "Vite", "SCSS", "System Design", "Rate Limiting"]
pubDate: 2026-04-10
featured: true
order: 2
thumbnail: "https://raw.githubusercontent.com/Olayiwola72/rate-limiting-simulations/main/docs/media/app-preview.png"
links:
  - text: "Live Demo"
    url: "https://rate-limiting-simulations.netlify.app/"
  - text: "Repository"
    url: "https://github.com/Olayiwola72/rate-limiting-simulations"
---

## Overview
Rate limiting is core to API protection, traffic shaping, and platform reliability. This lab makes those trade-offs tangible by letting you tweak configuration values and watch allowed vs rejected traffic evolve in real time.

## Included simulations
- Token Bucket
- Leaky Bucket
- Fixed Window
- Sliding Window Log
- Sliding Window Counter

## Highlights
- Live controls and configurable parameters (capacity, refill/leak rate, window sizes)
- Clear visualization of burst vs steady traffic behavior
- Throughput history feedback while the simulation runs

## Stack
React • TypeScript • Vite • SCSS • ECharts
