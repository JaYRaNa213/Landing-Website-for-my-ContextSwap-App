# One Click Setup Guide

## Quick Setup for VS Code

1. **Extract the project files** to your desired directory
2. **Open the project** in VS Code:
   ```bash
   code One Click-project
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** to http://localhost:5000

## Project Structure

```
One Click-project/
├── client/                 # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/    # UI components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   ├── hero.tsx  # Hero section
│   │   │   ├── features.tsx # Features showcase
│   │   │   ├── demo.tsx  # Interactive demo
│   │   │   └── ...       # Other components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities
│   │   ├── App.tsx       # Main app
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── server/                # Backend (Node.js + Express)
│   ├── index.ts          # Server entry
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage
│   └── vite.ts           # Vite integration
├── shared/               # Shared types
│   └── schema.ts         # Database schemas
└── Configuration files...
```

## Features Included

✅ **Landing Page Components:**
- Navigation with smooth scrolling
- Hero section with download CTAs
- Feature showcase grid
- Interactive demo with 4 modes
- Use cases for different user types
- Technical specifications
- FAQ accordion
- Footer with links

✅ **Modern Tech Stack:**
- React 18 + TypeScript
- Vite for fast development
- Tailwind CSS + shadcn/ui
- Responsive design
- Dark theme with gradients

✅ **Development Ready:**
- Hot module replacement
- TypeScript support
- ESLint configuration
- Optimized build process

## Customization

- **Colors**: Edit `client/src/index.css` CSS variables
- **Content**: Modify component files in `client/src/components/`
- **Routes**: Add API routes in `server/routes.ts`
- **Styling**: Use Tailwind classes or modify components

## Deployment

For production deployment:
1. Run `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables as needed

## Need Help?

- Check the README.md for detailed documentation
- Review component files for implementation examples
- Modify content to match your specific app requirements