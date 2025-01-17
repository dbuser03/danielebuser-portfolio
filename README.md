
# Technological Choices for the Portfolio

## Introduction

This document outlines the technological choices adopted for developing my personal portfolio, hosted at  **[www.danielebuser.com](http://www.danielebuser.com)** . The goal is to create a robust, efficient, and scalable development environment, ensuring compatibility between Linux and Windows.

## Tech Stack

For the development of the project, I selected the following tech stack:

* **Languages:** HTML, CSS, TypeScript
* **Framework:** Next.js
* **Animations:** Framer Motion
* **3D Graphics:** Three.js
* **Styling:** Tailwind CSS

### Reasons for the Choices

* **Next.js:**
  * Native support for TypeScript
  * Automatic performance optimization (SSR, ISR, SSG)
  * Easy deployment on platforms like Vercel
* **Framer Motion:**
  * Simple yet powerful animation API
  * Perfect integration with React and Next.js
* **Three.js:**
  * Native 3D graphic power for the web
  * Excellent integration with React via @react-three/fiber
* **Tailwind CSS:**
  * Utility-first approach to styling
  * Better CSS organization compared to traditional frameworks

## Dependency Management: Why `pnpm`?

I chose `pnpm` over `npm` or `yarn` for dependency management. The main reasons include:

* **Performance:** `pnpm` uses an advanced caching mechanism that significantly reduces installation times and disk space usage.
* **Intelligent package management:** Dependencies are not duplicated; symbolic links ensure better efficiency.
* **Deterministic structure:** Guarantees that all environments have exactly the same dependency versions.
* **Native monorepo support:** Excellent handling of projects with multiple packages.

### Installing `pnpm`

Installing `pnpm` is straightforward and supported across various operating systems:

* **Linux/macOS:**
  ```sh
  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```
* **Windows (PowerShell):**
  ```powershell
  iwr https://get.pnpm.io/install.ps1 -useb | iex
  ```
* **Alternative with Corepack:**
  ```sh
  corepack enable
  corepack prepare pnpm@latest --activate
  ```

## Development Environment Configuration

To ensure a stable and replicable development environment, I use **VS Code** with the following extensions:

* **Theme and Icons:** One Dark Pro, Material Icons
* **Formatting:** Prettier
* **Documentation:** Typora
* **Linting and Styling:** ESLint, Tailwind CSS IntelliSense
* **AI Tools:** Copilot Extension, ChatGPT, Claude

This configuration ensures an optimal development experience on both Linux and Windows, keeping the code clean and compliant with standards.

## Conclusion

This document provides an overview of the technological choices and the reasoning behind the project. The current setup guarantees a modern, high-performance, and scalable development environment, simplifying future maintenance and expansion of the portfolio.
