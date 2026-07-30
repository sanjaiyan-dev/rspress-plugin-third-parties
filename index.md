# Rspress Third Parties

High-Performance Third-Party Integrations

> Zero main-thread blocking YouTube, Google Maps, Tweet/X Embeds, GA4, GTM & custom script strategies built for React 19 & React Compiler.

[Get Started](/readme) | [View on GitHub](https://github.com/sanjaiyan-dev/rspress-plugin-third-parties)

## Features

- 🚀 **⚡ Zero Main-Thread Blocking**: Defers heavy third-party scripts via <code>requestIdleCallback</code> and lazy loading strategies to preserve 100/100 Lighthouse performance.
- ⚡ **🧠 React Compiler Pre-Optimized**: Ships pre-compiled with <code>React 19</code> auto-memoization at build time for instant client-side rendering with zero runtime overhead.
- 🎬 **🗺️ Media, Tweets & Location Embeds**: High-performance, zero-layout-shift components for YouTube, Twitter/X Posts, Google Maps (Point Pedro!), GA4, and Google Tag Manager.
- 📈 **📊 Zero-Config Global GA**: Auto-inject Google Analytics across all documentation pages automatically with a single line in your <code>rspress.config.ts</code>.
- 🛡️ **📦 React 19 Resource Pre-init**: Native <code>ReactDOM.preinit</code> and <code>ReactDOM.preload</code> integration during SSG builds with automatic script deduplication.
- 🧩 **🎯 Clean Subpath Architecture**: Browser components are strictly isolated from <code>Node.js</code> build logic to prevent bundler pollution and runtime crashes.
