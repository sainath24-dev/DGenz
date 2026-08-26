# DGenz Media — Precision B2B Demand Generation & Intent Engine

DGenz Media is a modern, high-performance B2B account-based marketing (ABM) and demand generation platform. It unifies deterministic buyer intent data, multi-channel targeting, content syndication, and pipeline acceleration to drive predictable revenue growth for enterprise brands.

---

## Key Features

- **Multi-Channel ABM Solutions**: Full-Funnel Marketing, Lead Generation Strategy, Content Syndication, PPC & Programmatic Advertising, and Outbound Prospecting.
- **Interactive Global Reach & TAM Visualizer**: 3D interactive WebGL Earth Globe and 2D continental routing maps showcasing 42M+ decision-makers across 100+ nations.
- **Dynamic WebGL & Micro-Interactions**: Smooth 60fps WebGL shaders (FloatingLines, LightPillar, GridScan, Hyperspeed) with lightweight, responsive fallback behaviors.
- **Adaptive Mobile Architecture**: 100% mobile-friendly responsive navigation with expandable card drawers, touch-optimized tap targets, and smooth layout scaling.
- **Optimized Bundle Splitting**: Rollup chunk splitting separating core React runtimes, WebGL/Three.js shaders, animation engines, and iconography for sub-second page loads.

---

## Tech Stack

- **Framework**: React 18, Vite 5 (SWC)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS, CSS Custom Properties, Vanilla CSS
- **3D & WebGL**: Three.js, OGL, Framer Motion, GSAP
- **Components & Primitives**: Radix UI, Lucide Icons, Sonner
- **Routing**: React Router v6

---

## Getting Started

### Prerequisites
- Node.js 18+ & npm

### Installation
```bash
# Clone the repository
git clone https://github.com/sainath24-dev/DGenz.git
cd DGenz

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
├── public/                 # Static public assets & favicons
├── src/
│   ├── assets/             # Brand logos, photography & media
│   ├── components/         # Core page components & interactive sections
│   │   └── ui/             # WebGL shaders & reusable UI primitives
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helpers & class merger
│   ├── pages/              # Solutions, Company, Resources, and Legal pages
│   ├── App.tsx             # Application router & providers
│   ├── index.css           # Design tokens, typography & animations
│   └── main.tsx            # React application entry point
├── tailwind.config.ts      # Tailwind configuration & design theme
└── vite.config.ts          # Vite build config with manual chunk splitting
```

---

## License
Private & Proprietary — © DGenz Media. All rights reserved.
