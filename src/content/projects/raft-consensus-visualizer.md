---
title: "Raft Consensus Visualizer"
description: "A polished, deterministic in-browser simulation for studying Raft leader election, quorum, heartbeats, log replication, and failure recovery through an interactive UI."
category: "Distributed Systems"
metrics: "Deterministic Raft simulation"
tags: ["React", "TypeScript", "Vite", "SCSS", "Distributed Systems", "Raft"]
pubDate: 2026-04-10
featured: true
order: 1
thumbnail: "https://raw.githubusercontent.com/Olayiwola72/raft-consensus-visualizer/main/docs/media/app-preview.png"
links:
  - text: "Live Demo"
    url: "https://raft-consensus-visualizer.netlify.app/"
  - text: "Repository"
    url: "https://github.com/Olayiwola72/raft-consensus-visualizer"
---

## Overview
Raft can feel abstract when it is described only in text. This project turns the algorithm into a product-quality visual system design tool so you can inspect cluster behavior tick by tick, introduce failures, and watch recovery play out.

## What it demonstrates
- Leader election after timeout
- Heartbeat stabilization from a leader
- Quorum-based commit behavior
- Log replication behavior across nodes
- Follower and leader isolation scenarios
- Targeted restore actions and full cluster recovery

## Core features
- Pause, resume, or single-step the cluster clock
- Tune heartbeat and election timeout settings
- Switch between 3-node and 5-node clusters
- Inject client requests to observe commit rules
- Inspect event logs and cluster-level design notes in real time

## Stack
React • TypeScript • Vite • SCSS
