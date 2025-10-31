# Daniel Jones Digital Portfolio

A modern, responsive portfolio website built with Vite, Vue 3, TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

### Prerequisites

-   Node.js 20 or higher
-   npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Navigation.vue   # Site navigation
│   ├── Footer.vue       # Site footer
│   ├── PortfolioItem.vue # Individual portfolio card
│   └── MasonryGrid.vue  # Responsive grid layout
├── views/              # Page components
│   ├── Home.vue        # Homepage with hero section
│   ├── Portfolio.vue   # Portfolio grid page
│   └── ProjectDetail.vue # Individual project pages
├── types/              # TypeScript definitions
│   └── portfolio.ts    # Portfolio data types
├── router/             # Vue Router configuration
│   └── index.ts        # Route definitions
└── style.css           # Global styles with Tailwind CSS
```

## 🛠 Customization

### Colors and Branding

Edit `src/style.css` to customize:

```css
@layer components {
    .btn-primary {
        @apply bg-your-brand-color text-white; /* Change brand colors */
    }
}
```

### Navigation

Update `src/components/Navigation.vue` to modify:

-   Logo design
-   Navigation links
-   Name

### Content

-   **Hero section**: Edit `src/views/Home.vue`
-   **About section**: Edit the about text in `src/views/Home.vue`
-   **Contact info**: Update `src/components/Footer.vue`

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable automatic deployments

The `netlify.toml` file is already configured with:

-   Automatic redirects for Vue Router
-   Performance optimizations
-   Caching headers

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your web server
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

-   Mobile: < 640px
-   Tablet: 640px - 1024px
-   Desktop: > 1024px

All components use Tailwind CSS classes for responsive behaviour.

## 🔧 Tech Stack

-   **Vite 7**: Lightning-fast build tool
-   **Vue 3**: Progressive JavaScript framework
-   **TypeScript**: Type-safe development
-   **Tailwind CSS v4**: Utility-first CSS framework
-   **Vue Router**: Client-side routing

## 🆘 Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Image Issues

-   Ensure images are in `public/images/` directory
-   Use absolute paths starting with `/images/`
-   Check file extensions match the JSON references

## 🔄 Updates

To update dependencies:

```bash
npm update
npm run build  # Test build still works
```

The project uses modern, stable versions that should remain compatible for years to come.
