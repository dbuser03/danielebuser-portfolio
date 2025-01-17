# Daniele Buser Portfolio

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

## Naming Conventions

To maintain readability, consistency, and ease of collaboration, the project adheres to a well-defined naming convention across the tech stack. Here are the key practices:

* **File and Folder Names:**
  * Use **kebab-case** for all file and folder names, ensuring compatibility across Linux and Windows file systems.
  * Framework-specific files like `page.tsx`, `layout.tsx`, and `api.ts` follow the naming conventions prescribed by Next.js to align with its file-based routing system.
* **TypeScript:**
  * Variables and functions follow  **camelCase** , promoting consistency and readability.
  * Constants are written in **UPPER_SNAKE_CASE** to differentiate them clearly as immutable values.
* **React Components:**
  * Component files and exported components use **PascalCase** (e.g., `Header.tsx`, `UserProfile.tsx`) to distinguish them from utility files or plain functions.
* **Tailwind CSS Classes:**
  * Utility classes are applied directly in the JSX markup, following Tailwind’s convention for a semantic, utility-first approach. Custom CSS classes are minimized to maintain simplicity.
* **Three.js Objects and Animations:**
  * Objects and animations are named contextually based on their role (e.g., `mainCamera`, `lightSource`, `rotateAnimation`), ensuring that the 3D scene remains intuitive to navigate and manage.

This structured approach guarantees consistency across the codebase, reduces cognitive load, and simplifies maintenance and scaling for future development.

## Branching Strategy

Use a structured branching model with the following branches:

* **Main (or `main`) Branch:**
  * Represents the stable, production-ready version of the portfolio.
  * Direct deployments to production should always come from this branch.
* **Development (or `dev`) Branch:**
  * Serves as an integration branch for new features and bug fixes.
  * All feature branches merge here after peer reviews and testing.
* **Feature Branches:**
  * Branch off from `dev`.
  * Used for developing new features or making specific updates.
  * Naming convention: `feature/feature-name` (e.g., `feature/3d-carousel`).
* **Bugfix Branches:**
  * Branch off from `dev` or `main`, depending on the severity of the bug.
  * Naming convention: `bugfix/bug-description` (e.g., `bugfix/navbar-render-issue`).
* **Release Branches:**
  * Branch off from `dev` when preparing a production release.
  * Naming convention: `release/version` (e.g., `release/v1.0.0`).
  * Used for finalizing features, testing, and making minor adjustments before merging into `main`.
* **Hotfix Branches:**
  * Branch off from `main` to address critical production issues.
  * Naming convention: `hotfix/issue-description` (e.g., `hotfix/critical-css-bug`).
  * Merges back into both `main` and `dev` to ensure the fix is propagated.

### Workflow

* **Feature Development:**
  * Developers create a `feature/` branch for each feature.
  * Implement changes, commit often, and open pull requests (PRs) to `dev` once the feature is complete.
* **Testing:**
  * All features are merged into `dev` and tested collectively in a staging environment.
* **Release Process:**
  * When `dev` is stable and ready for deployment, create a `release/` branch.
  * Final adjustments and quality assurance (QA) happen here.
  * Merge `release/` into both `main` and `dev` after approval.
* **Production Deployment:**
  * Only `main` is deployed to production.
* **Hotfixes:**
  * For critical issues in production, create a `hotfix/` branch from `main`.
  * Merge the fix into both `main` (for immediate deployment) and `dev` (to sync the fix).

## Conclusion

This document provides an overview of the technological choices and the reasoning behind the project. The current setup guarantees a modern, high-performance, and scalable development environment, simplifying future maintenance and expansion of the portfolio.
