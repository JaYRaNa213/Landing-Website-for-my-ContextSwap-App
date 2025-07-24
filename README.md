# ContextSwap - Digital Workspace Switcher

Switch your entire digital workspace in 1 click. Study. Code. Meet. Automate.

## Overview

ContextSwap is a smart workspace switcher that lets users automatically launch sets of apps, websites, files, and tools based on a chosen context or mode (e.g., Study, Coding, Meeting). This is a professional landing page built to promote the downloadable Windows (.exe) and Android (.apk) versions of the application.

## Features

- **One-Click Launch**: Instantly launch your entire workspace setup - apps, websites, files, and music
- **Smart Templates**: Pre-built templates for Study, Coding, Meeting, and Focus modes
- **Auto-Scheduling**: Schedule your modes to activate automatically
- **Drag & Drop**: Easy customization with drag-and-drop interface
- **Usage Analytics**: Track your productivity patterns
- **100% Local**: Your data stays on your device, no cloud required

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Node.js + Express
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Icons**: Lucide React + React Icons

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:5000 in your browser

## Project Structure

```
ContextSwap-project/
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # App entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                  # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage interface
│   └── vite.ts             # Vite integration
├── shared/                  # Shared types and schemas
│   └── schema.ts           # Database schemas
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

The application is designed to be deployed on platforms like Vercel, Netlify, or any Node.js hosting service.

## License

MIT License - feel free to use this code for your own projects!#
