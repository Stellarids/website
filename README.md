# StellarID - Engineering Intelligence Platform

A stunning, minimalistic landing page for StellarID, a developer tool that transforms engineering processes from black boxes into actionable intelligence. Built with modern design principles and eye-catching gradients.

## ✨ Features

- 🎨 **Dynamic Gradient System**: Multiple gradients with glass morphism effects
- 📱 **Fully Responsive**: Mobile-first design with fluid layouts
- ⚡ **Next.js 14**: Built with App Router and TypeScript
- 🎯 **Conversion-Optimized**: Strategic dual CTA system for maximum conversions
- ♿ **Accessibility First**: Semantic HTML, ARIA attributes, and keyboard navigation
- 🔧 **Calendly Integration**: Seamless scheduling for design partner calls
- 📧 **Advanced Forms**: Beautiful waitlist signup with validation
- ✨ **Micro-Interactions**: Hover effects, animations, and smooth transitions
- 🌟 **Glass Morphism**: Modern glass card effects throughout
- 🎭 **Dynamic Backgrounds**: Floating gradient orbs and ambient lighting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Footer.tsx          # Site footer
│   └── modals/
│       ├── CalendlyModal.tsx   # Calendly scheduling modal
│       └── WaitlistModal.tsx   # Email waitlist signup modal
└── ...config files
```

## Customization

### Colors & Design System
The sophisticated color palette is defined in `tailwind.config.js`:

**Backgrounds:**
- Primary: `#0B0B0F` (dark-bg) with radial gradient overlays
- Secondary: `#151520` (dark-secondary)  
- Tertiary: `#1A1A2E` (dark-tertiary)

**Typography:**
- Primary text: `#FFFFFF` (text-primary)
- Secondary text: `#B8B8CC` (text-secondary)  
- Muted text: `#7C7C8A` (text-muted)

**Gradient System:**
- `gradient-stellar`: Primary brand gradient (blue → purple → pink)
- `gradient-primary`: Secondary gradient (blue shades)
- `gradient-accent`: Cyan-based accent
- `gradient-warm`: Pink to yellow
- `gradient-secondary`: Pink to red
- `gradient-card`: Glass morphism overlay
- `gradient-border`: Animated border effects

**Interactive Elements:**
- Glass cards with backdrop blur
- Gradient borders with CSS mask effects
- Floating animations and hover states
- Glow effects and dynamic shadows

### Calendly Integration
Update the Calendly URL in `components/modals/CalendlyModal.tsx`:
```tsx
<iframe src="https://calendly.com/your-username/20min" />
```

### Form Handling
The waitlist form currently logs to console. To connect to a backend:

1. Create an API endpoint at `app/api/waitlist/route.ts`
2. Update the form submission in `WaitlistModal.tsx`

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

The app will be available on port 3000 by default.

## Performance & SEO

- ✅ Optimized fonts with `font-display: swap`
- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph data
- ✅ Responsive images and layouts
- ✅ Smooth scrolling and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design Philosophy

This landing page follows modern design principles:

- **Minimalistic Approach**: Clean layouts with purposeful whitespace
- **Gradient-First Design**: Strategic use of gradients for visual hierarchy
- **Glass Morphism**: Modern glass effects for depth and sophistication  
- **Micro-Interactions**: Subtle animations that enhance user experience
- **Accessibility**: WCAG 2.1 AA compliance with semantic HTML
- **Performance**: Optimized animations and efficient CSS

## 🚀 Key Design Features

1. **Dynamic Hero Section**: Split layout with floating visual elements
2. **Card-Based Architecture**: Glass morphism cards with gradient borders
3. **Interactive Elements**: Hover effects and micro-animations
4. **Visual Hierarchy**: Strategic use of gradients for emphasis
5. **Mobile-First**: Responsive design that works on all devices

## License

© 2025 StellarID. All rights reserved.