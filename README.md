<div align="center">
  <img src="public/novabuild-logo.svg" width="140" alt="NovaBuild Logo" />
  <h1>NovaBuild Studio</h1>
  <p><strong>Premium Engineering, Construction & Architectural Web Platform</strong></p>
</div>

<br />

## 🌟 Executive Summary

NovaBuild is an enterprise-grade, high-performance web application tailored for the architecture, engineering, and construction (AEC) industry. Designed with a meticulous focus on **premium aesthetics**, **blazing-fast performance**, and **seamless user experience**, this platform serves as the digital front door for a world-class engineering firm.

This repository contains the complete source code for the NovaBuild platform, encompassing a modern React Single Page Application (SPA) frontend integrated with an Express.js backend for robust API handling.

---

## 🚀 Key Features & Highlights

### 1. Premium Visual Identity
- **Glassmorphism Design:** Extensive use of `backdrop-blur` and semi-transparent backgrounds to create a sense of depth and modernity.
- **Dynamic Animations:** Fluid, physics-based micro-interactions powered by `framer-motion`. Every scroll, hover, and click is choreographed to feel deliberate and responsive.
- **Curated Color Palette:** A highly sophisticated dark-mode aesthetic utilizing deep slates (`slate-950`), vibrant teals (`teal-500` to `teal-700`), and striking amber accents (`amber-300`).
- **Typography:** Utilizing modern sans-serif fonts to establish authority, clarity, and precision—mirroring the architectural ethos of the company.

### 2. High-Performance Architecture
- **Vite Bundler:** Lightning-fast HMR (Hot Module Replacement) during development and optimized roll-up builds for production.
- **Single Page Application (SPA) Routing:** Powered by `react-router-dom`, ensuring instant page transitions without full browser reloads.
- **Smart Hash Navigation:** A custom `useNavigate` and `scrollTo` implementation that effortlessly handles both cross-page routing and in-page anchor scrolling simultaneously.

### 3. Component-Driven Development
- **Modular Layouts:** A globally accessible `<Navbar />` and `<Footer />` architecture ensuring DRY (Don't Repeat Yourself) principles and instant design consistency across every route.
- **Radix UI Primitives:** Accessible, unstyled UI components serving as the foundation for complex interactive elements (Dropdowns, Dialogs, Accordions).
- **Lucide Icons:** Clean, consistent, and scalable vector icons integrated seamlessly via `lucide-react`.

---

## 🛠️ Technology Stack Deep Dive

### Frontend (Client)
- **React 18:** The core library for building the interactive user interface, utilizing the latest concurrent features and functional components with hooks.
- **TypeScript:** Providing robust type safety, reducing runtime errors, and enhancing developer experience (DX) through superior IDE autocompletion.
- **Tailwind CSS 3:** Utility-first CSS framework enabling rapid, highly-customized styling directly within TSX files without the bloat of traditional stylesheets.
- **Framer Motion:** The industry-standard animation library for React, utilized for scroll-linked animations (`whileInView`), layout transitions, and complex spring physics.
- **React Router 6:** Managing application state, URL parameters, and declarative routing across the SPA.
- **Zod:** TypeScript-first schema declaration and validation, ensuring that data structures strictly adhere to expected formats.

### Backend (Server)
- **Express.js:** A minimalist web framework for Node.js, providing the foundation for API endpoints and server-side logic.
- **Vite Integration:** The Express server is deeply integrated with the Vite development server in development mode, allowing for single-port execution (Port 8080) and seamless HMR for both frontend and backend code.

### Tooling & Infrastructure
- **PNPM:** Fast, disk space efficient package manager.
- **Vitest:** A blazing fast unit test framework powered by Vite.
- **ESLint & Prettier:** Automated code formatting and linting to maintain pristine code quality across the repository.

---

## 📂 Comprehensive Directory Structure

A detailed look at how the NovaBuild repository is organized to maintain scalability and clarity:

```text
novabuild/
├── client/                      # React SPA Frontend Source Code
│   ├── components/              # Reusable React Components
│   │   ├── ui/                  # Radix-based foundational UI components (buttons, inputs, etc.)
│   │   ├── Navbar.tsx           # Global site navigation with intelligent scrolling
│   │   └── Footer.tsx           # Global site footer with branding and quick links
│   ├── hooks/                   # Custom React Hooks (e.g., use-mobile, use-toast)
│   ├── lib/                     # Utility functions (e.g., Tailwind class merging `cn`)
│   ├── pages/                   # Route-level Components (Views)
│   │   ├── Index.tsx            # Home Page (Hero, Highlights, Testimonials, Contact)
│   │   ├── About.tsx            # About Us (Story, Principles, Team)
│   │   ├── Services.tsx         # Services Directory (Capabilities, Process)
│   │   └── NotFound.tsx         # 404 Error Page
│   ├── App.tsx                  # Main React Router configuration and layout wrapper
│   ├── global.css               # Tailwind directives and CSS variables (Theming)
│   ├── index.html               # The singular HTML entry point
│   └── vite-env.d.ts            # Vite TypeScript declarations
│
├── server/                      # Express.js Backend Source Code
│   ├── routes/                  # API route handlers
│   │   └── demo.ts              # Example API endpoint implementation
│   ├── index.ts                 # Express server initialization and middleware configuration
│   └── node-build.ts            # Production build orchestration for the server
│
├── shared/                      # Code shared between Client and Server
│   └── api.ts                   # TypeScript interfaces and types for API contracts
│
├── public/                      # Static Assets (served verbatim)
│   ├── novabuild-logo.png       # Rasterized brand logo
│   └── novabuild-logo.svg       # Vectorized brand logo
│
├── tailwind.config.ts           # Tailwind CSS configuration, theme extensions, and plugins
├── tsconfig.json                # TypeScript compiler options
├── vite.config.ts               # Vite bundler configuration for the client
├── vite.config.server.ts        # Vite configuration for the server build
└── package.json                 # Project metadata, scripts, and dependencies
```

---

## 🎨 Design System & Theming

### The Tailwind Architecture
NovaBuild relies on a highly customized `tailwind.config.ts` integrated with CSS variables defined in `client/global.css`. This setup allows for dynamic theme switching and a highly cohesive design language.

#### Color Palette
- **Primary Base:** Slate (`#020617` to `#f8fafc`). Used for backgrounds, structural elements, and typography.
- **Brand Accent:** Teal (`#0f766e` to `#ccfbf1`). Represents engineering precision, sustainability, and forward-thinking.
- **Highlight Accent:** Amber (`#f59e0b`). Used sparingly to draw attention to critical metrics, icons, and call-to-actions.

#### Glassmorphism Utilities
The UI makes extensive use of Tailwind's backdrop filters. Elements frequently combine `bg-white/10` (or similar low-opacity fills) with `backdrop-blur-md` and subtle borders (`border-white/20`) to create floating, translucent cards that let background gradients and images bleed through softly.

---

## 🧩 Component Breakdown & Logic

### Global Layout (`Navbar` & `Footer`)
Extracted from monolithic page files to ensure absolute consistency.
- **Navbar.tsx:** Contains a responsive hamburger menu for mobile devices, animated dropdowns, and a scroll listener that adjusts the navbar's padding and background opacity based on the user's scroll position.
- **Footer.tsx:** A comprehensive footer containing the dynamic copyright year, structured sitemap links, a newsletter subscription form, and floating action buttons (FABs) for "Back to Top" and "Call Us" functionalities.

### Cross-Page Hash Navigation (`scrollTo` utility)
One of the most complex UI challenges in a SPA is navigating to a specific `#hash` anchor on a *different* page. NovaBuild solves this elegantly within the Navbar:
1. It checks if the requested hash is on the current page.
2. If so, it uses native DOM `scrollIntoView()` with a smooth behavior.
3. If the hash is on a different page (e.g., clicking "Projects" while on the "About" page), it uses React Router's `useNavigate` to redirect to `/#projects`.

### Page Overviews
- **Index.tsx (Home):** A masterclass in landing page design. Features a dramatic dark hero section with abstract architectural gradients, a highly visual "Capabilities" grid, a masonry-style "Projects" gallery, and an integrated Contact form.
- **About.tsx:** Focuses on storytelling. It utilizes Framer Motion's `whileInView` to cascade elements onto the screen as the user scrolls, introducing the company's history, core principles, and the executive team.
- **Services.tsx:** A detailed breakdown of the firm's offerings, from Civil Engineering Drafting to Project Management. It includes a step-by-step process timeline demonstrating the operational workflow.
- **NotFound.tsx:** A beautifully styled 404 page that maintains the site's layout (Navbar/Footer) rather than dropping the user into an unstyled void.

---

## ⚙️ Development Guide & Setup

Follow these instructions meticulously to run NovaBuild locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- PNPM (v8 or higher)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/prathameshgiri/novabuild.git
   cd novabuild
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Running the Development Server
The starter utilizes a powerful, unified development environment.
```bash
pnpm dev
```
This single command spins up Vite. Vite handles the Hot Module Replacement (HMR) for the React frontend, while simultaneously compiling and restarting the Express backend upon any file changes. The application will be accessible at `http://localhost:8080`.

### Production Build
To create a highly optimized production bundle:
```bash
pnpm build
```
This command:
1. Executes `tsc` to ensure absolute type safety across the project.
2. Uses Vite to bundle the React frontend into static files within the `dist/public` directory.
3. Uses Vite (via `vite.config.server.ts`) to compile the Express server into `dist/index.js`.

To run the compiled production build locally:
```bash
pnpm start
```

### TypeScript Type Checking
To manually verify TypeScript integrity without building:
```bash
pnpm typecheck
```

---

## 🌐 API & Server Architecture

While NovaBuild functions primarily as a React SPA, the included Express server provides immediate readiness for backend expansion (e.g., Database integration, Authentication, third-party API proxies).

### Defining Routes
Routes are defined in `server/routes/` and attached to the Express application in `server/index.ts`. All API routes are conventionally prefixed with `/api/`.

### Shared Types (`shared/api.ts`)
A critical feature of this architecture is the `shared` directory. By defining TypeScript interfaces here, you establish an unbreakable contract between the Client and Server. If a backend route alters its response structure, the TypeScript compiler will immediately flag errors in the React components consuming that data, preventing runtime crashes in production.

---

## 🧪 Testing

NovaBuild comes pre-configured with **Vitest**, an incredibly fast, Vite-native testing framework.

To execute the test suite:
```bash
pnpm test
```
Vitest utilizes the same configuration plugins and transformation pipelines as the main Vite app, ensuring that your test environment perfectly mirrors your development and production environments.

---

## 🚢 Deployment Strategies

The architecture of NovaBuild supports extremely flexible deployment topologies.

### 1. Traditional Node.js Hosting (Render, Heroku, DigitalOcean)
Because the `pnpm build` process creates a self-contained Express server that serves the static React files, you can deploy the `dist` folder to any standard Node.js hosting provider. Ensure the provider runs `pnpm start` to initialize the server on the port provided by the environment (`process.env.PORT`).

### 2. Static Site + Serverless (Vercel, Netlify)
The React frontend (`client/`) can be deployed as a purely static site to CDNs like Vercel or Netlify. The Express routes (`server/`) can easily be adapted into Serverless Functions provided by those platforms.

---

## 🛠️ Extensibility and Future Scope

### CMS Integration
NovaBuild is structured to easily integrate with headless CMS platforms like Sanity, Contentful, or Strapi. The service and project data arrays can be replaced with asynchronous fetching hooks within the respective components.

### Internationalization (i18n)
The component-based structure allows for straightforward integration of libraries like `react-i18next`. By wrapping text nodes in translation functions, the site can dynamically serve content based on user locale.

### Performance Analytics
To monitor user engagement and track core web vitals, NovaBuild can be integrated with tools like Google Analytics, Vercel Analytics, or Plausible.

---

## 🤝 Contributing

We welcome contributions to NovaBuild! Whether it's reporting a bug, suggesting a feature, or submitting a Pull Request, your input is highly valued.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request.

Please ensure that your code adheres to the existing styling conventions and passes all TypeScript and ESLint checks (`pnpm typecheck`).

---

## 📜 Code Style and Standards
- **ESLint Config:** Strict linting rules are enforced using `@typescript-eslint`.
- **Prettier:** Code formatting is automatically handled. Run `pnpm run format` to format all files.
- **Component Anatomy:** Functional components with React Hooks. Avoid Class Components.
- **File Naming:** PascalCase for React components (e.g., `Button.tsx`). camelCase for utility functions and hooks (e.g., `useToast.ts`).

---

## 🐞 Troubleshooting Common Issues

### Issue: Vite Server Not Starting
- **Cause:** Port 8080 might be in use by another application.
- **Solution:** Check for running processes on port 8080 or modify `vite.config.ts` to use a different port.

### Issue: TypeScript Errors During Build
- **Cause:** Type mismatches or strict null check failures.
- **Solution:** Run `pnpm typecheck` to identify specific errors and resolve them in your `.tsx` or `.ts` files.

---

<br />
<br />
<br />

<div align="center">
  <img src="https://img.shields.io/badge/Designed_and_Developed_by-Prathamesh_Giri-0f766e?style=for-the-badge&logo=react" alt="Designed and Developed by Prathamesh Giri" />
  
  <br/><br/>
  
  <h2>🌐 <a href="https://build.prathameshgiri.in" style="color: #0f766e; text-decoration: none;">build.prathameshgiri.in</a></h2>
  
  <br/><br/>
  
  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
    <h3 style="margin-top: 0; color: #0f766e; display: flex; align-items: center; justify-content: center; gap: 8px;">
      ✨ Premium Client Demonstration ✨
    </h3>
    <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
      This premium architecture and construction web template was exclusively crafted as a high-fidelity client demonstration. It showcases state-of-the-art web technologies, modern design philosophies, and performant architectures.
    </p>
    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
    <p style="color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 0;">
      🔓 Completely Open-Source. Feel free to use, modify, and build upon this foundation for your own ambitious projects.
    </p>
  </div>
</div>
