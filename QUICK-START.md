# Quick Start Guide for Daniel Jones Digital Portfolio

## 🎯 For Daniel: How to Update Your Portfolio

### Adding New Portfolio Items (Easy!)

1. **Add your images:**

    - Put new photos in the `public/images/portfolio/` folder
    - Name them descriptively (e.g., `luxury-bathroom-2024.jpg`)

2. **Update the portfolio grid:**
    - Open `src/components/MasonryGrid.vue` in VS Code
    - Find the `portfolioItems` array (around line 94)
    - Add your new project to the array:

```typescript
{
    id: 13,
    title: "Amazing New Project",
    description: "This is my latest interior design project...",
    image: "/images/portfolio/my-new-project.jpg",
    category: "interiors"
}
```

3. **Deploy:**
    - Save the file
    - Push to GitHub
    - Netlify automatically updates your website!

### Pro Tips:

-   Items are automatically distributed across the 4-column masonry grid
-   The grid is responsive: 2 columns on mobile, 4 on desktop
-   Each item shows title on hover with a smooth overlay effect

### Need Help?

1. Check that image file names match exactly (including .jpg)
2. Make sure the JSON syntax is correct (commas, quotes)
3. Test locally with `npm run dev` before pushing

## 🚀 Development Commands

```bash
# Start working on the site
npm run dev

# Build for production
npm run build

# Test the built site
npm run preview
```

## 🌐 Going Live

1. Push your changes to GitHub
2. Netlify automatically builds and deploys
3. Your site updates within 2-3 minutes

Your website will be available at your custom domain once connected to Netlify!

## 📁 Important Files to Know

-   `src/components/MasonryGrid.vue` - Your portfolio items (this is what you'll edit most)
-   `public/images/portfolio/` - All your photos go here
-   `src/components/Footer.vue` - Update contact info here
-   `src/views/Home.vue` - Edit homepage text here
-   `src/views/Portfolio.vue` - Portfolio page layout

## 🎨 Image Guidelines

-   **Size**: 800-1200px wide works best
-   **Format**: JPG or WebP recommended
-   **Quality**: High quality but web-optimized
-   **Names**: Use descriptive names, no spaces (use hyphens instead)

## ✅ Checklist for New Projects

-   [ ] Images added to `public/images/portfolio/`
-   [ ] Portfolio items added to `MasonryGrid.vue`
-   [ ] Tested locally with `npm run dev`
-   [ ] Pushed to GitHub
-   [ ] Verified site updated on Netlify

That's it! You're ready to manage your portfolio like a pro! 🎉
