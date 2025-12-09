// Shared portfolio data source for MasonryGrid and ProjectDetail
// This ensures data consistency across the application
// Unsure if adding images only is enough to trigger a build on Netlify

export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    type?: "image" | "video";
    images?: string[];
}

// Portfolio items organized by column for easy rearrangement
// Following Flowbite masonry pattern - each column is defined separately

// COLUMN 1 - Items that appear in the first column
export const column1Items: PortfolioItem[] = [
   {
        id: 120,
        title: "Porsche GT3 RS - Open Doors",
        description: "Porsche GT3 RS - Rendered in Blender with Cycles - Posted in Adobe Suite",
        image: "/images/thumbs/product/Porsche 3QT Pink_Doors_Open_Final.jpg",
        category: "product",
        images: ["/images/portfolio/product/Porsche 3QT Pink_Doors_Open_Final.png"],
    },
    {
        id: 130,
        title: "Porsche GT3 RS - Top Down",
        description: "Porsche GT3 RS - Rendered in Blender with Cycles - Posted in Adobe Suite",
        image: "/images/thumbs/product/Porsche 3QT Pink_TopDown_Final.jpg",
        category: "product",
        images: ["/images/portfolio/product/Porsche 3QT Pink_TopDown_Final.png"],
    },
    {
        id: 102,
        title: "Contemporary Kitchen Space",
        description: "Sleek kitchen design with modern appliances",
        image: "/images/thumbs/interior/Kitchen_Final_Magnific.jpg",
        category: "interior",
        images: ["/images/portfolio/interior/Kitchen_Final_Magnific.png"],
    },
    {
        id: 103,
        title: "Elegant Bathroom Render",
        description: "Photorealistic bathroom visualization",
        image: "/images/thumbs/interior/Bathroom_Shot_FINAL_MAGNIFIC.jpg",
        category: "interior",
        images: [
            "/images/portfolio/interior/Bathroom_Shot_FINAL_MAGNIFIC.png"],
    },
    {
        id: 101,
        title: "Luxurious Bathroom Design",
        description: "Modern bathroom with elegant fixtures and finishes",
        image: "/images/thumbs/interior/Bathroom_Shot_Cameo_Magnific.jpg",
        category: "interior",
        images: [
            "/images/portfolio/interior/Bathroom_Shot_Cameo_Magnific.png"],
    },
    {
        id: 105,
        title: "Green Wallpaper Concept",
        description: "Alternative color scheme visualization",
        image: "/images/thumbs/interior/Wallpaper_GREEN_Magnific.jpg",
        category: "interior",
        images: [
            "/images/portfolio/interior/Wallpaper_GREEN_Magnific.png"],
    },
    {
        id: 202,
        title: "Product Detail",
        description: "High-resolution product shot",
        image: "/images/thumbs/product/Untitled-1.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-1.jpg"],
    },
    {
        id: 209,
        title: "Media Centre",
        description: "Media center showcase",
        image: "/images/portfolio/product/Media_Centre.mp4",
        category: "product",
        type: "video",
        images: ["/images/portfolio/product/Media_Centre.mp4"],
    },
];

// COLUMN 2 - Items that appear in the second column
export const column2Items: PortfolioItem[] = [
      {
        id: 121,
        title: "Porsche GT3 RS - Main Shot",
        description: "Porsche GT3 RS - Rendered in Blender with Cycles - Posted in Adobe Suite",
        image: "/images/thumbs/product/Porsche 3QT Pink_Final.jpg",
        category: "product",
        images: ["/images/portfolio/product/Porsche 3QT Pink_Final.png"],
    },
    {
        id: 204,
        title: "Product Shot Detail",
        description: "Alternative product angle",
        image: "/images/thumbs/product/Product_Shot_02_Magnific.jpg",
        category: "product",
        images: ["/images/portfolio/product/Product_Shot_02_Magnific.png"],
    },
    {
        id: 104,
        title: "Textured Wallpaper Design",
        description: "Interior wall treatment visualization",
        image: "/images/thumbs/interior/Wallpaper_FINAL_Magnific.jpg",
        category: "interior",
        images: ["/images/portfolio/interior/Wallpaper_FINAL_Magnific.png"],
    },
    {
        id: 212,
        title: "Product Detail",
        description: "Product rendering showcase",
        image: "/images/thumbs/product/Untitled-111.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-111.jpg"],
    },
    {
        id: 213,
        title: "Product Detail",
        description: "Professional product visualization",
        image: "/images/thumbs/product/Untitled-1111.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-1111.jpg"],
    },
    {
        id: 214,
        title: "Product Detail",
        description: "Detailed product render",
        image: "/images/thumbs/product/Untitled-11111.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-11111.jpg"],
    },
];

// COLUMN 3 - Items that appear in the third column
export const column3Items: PortfolioItem[] = [
    {
        id: 122,
        title: "Porsche GT3 RS - Interior Shot",
        description: "Porsche GT3 RS - Rendered in Blender with Cycles - Posted in Adobe Suite",
        image: "/images/thumbs/product/Porsche 3QT Pink_Inside_Car_Final.jpg",
        category: "product",
        images: ["/images/portfolio/product/Porsche 3QT Pink_Inside_Car_Final.png"],
    },
    {
        id: 210,
        title: "Wardrobe System",
        description: "Wardrobe visualization",
        image: "/images/portfolio/product/wardrobe_0000.mp4",
        category: "product",
        type: "video",
        images: ["/images/portfolio/product/wardrobe_0000.mp4"],
    },
    {
        id: 107,
        title: "Concrete Interior Detail",
        description: "Modern concrete finish visualization",
        image: "/images/thumbs/interior/Concrete_Magnific_FINAL.jpg",
        category: "interior",
        images: ["/images/portfolio/interior/Concrete_Magnific_FINAL.png"],
    },
    {
        id: 208,
        title: "Top-Down Product View",
        description: "Overhead product visualization",
        image: "/images/thumbs/product/Topdown_magnific1.jpg",
        category: "product",
        images: ["/images/portfolio/product/Topdown_magnific1.png"],
    },
    {
        id: 211,
        title: "Product Detail",
        description: "Professional product visualization",
        image: "/images/thumbs/product/Untitled-11.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-11.jpg"],
    },
    {
        id: 106,
        title: "Bathroom Doorway View",
        description: "Elegant bathroom entrance visualization",
        image: "/images/thumbs/interior/Bathroom_Shot_Doorway.jpg",
        category: "interior",
        images: ["/images/portfolio/interior/Bathroom_Shot_Doorway.jpg"],
    },
    {
        id: 301,
        title: "Northwest House Exterior",
        description: "Architectural exterior visualization",
        image: "/images/thumbs/exterior/HOUSE_NORTHWEST_[D02].jpg",
        category: "exterior",
        images: ["/images/portfolio/exterior/HOUSE_NORTHWEST_[D02].jpg"],
    },
];

// COLUMN 4 - Items that appear in the fourth column
export const column4Items: PortfolioItem[] = [
    {
        id: 124,
        title: "Porsche GT3 RS - Tail",
        description: "Porsche GT3 RS - Rendered in Blender with Cycles - Posted in Adobe Suite",
        image: "/images/thumbs/product/Porsche 3QT Pink_Tail_Final.jpg",
        category: "product",
        images: ["/images/portfolio/product/Porsche 3QT Pink_Tail_Final.png"],
    },
    {
        id: 203,
        title: "Final Product Render",
        description: "Polished product visualization",
        image: "/images/thumbs/product/Final_Render_F01_Magnific.jpg",
        category: "product",
        images: [
            "/images/portfolio/product/Final_Render_F01_Magnific.png"],
    },
    {
        id: 201,
        title: "Product Visualization",
        description: "High-quality 3D product rendering",
        image: "/images/thumbs/product/Product_Shot_Magnific.jpg",
        category: "product",
        images: [
            "/images/portfolio/product/Product_Shot_Magnific.png"],
    },
    {
        id: 215,
        title: "Wallpaper Product Design",
        description: "Decorative wallpaper visualization",
        image: "/images/thumbs/product/Wallpapers_01_Magni.jpg",
        category: "product",
        images: ["/images/portfolio/product/Wallpapers_01_Magni.png"],
    },
    {
        id: 205,
        title: "Tire Visualization",
        description: "Detailed tire product render",
        image: "/images/thumbs/product/Tyres_02_Magnific.jpg",
        category: "product",
        images: ["/images/portfolio/product/Tyres_02_Magnific.png"],
    },
    {
        id: 206,
        title: "Fanta Bottle Render",
        description: "Product with dynamic lighting setup",
        image: "/images/thumbs/product/Fanta_F01_Interactive LightMix_Magnific.jpg",
        category: "product",
        images: [
            "/images/portfolio/product/Fanta_F01_Interactive LightMix_Magnific.png"],
    },
    {
        id: 207,
        title: "Drawer System",
        description: "Furniture product visualization",
        image: "/images/portfolio/product/Drawers_0000.mp4",
        category: "product",
        type: "video",
        images: ["/images/portfolio/product/Drawers_0000.mp4"],
    },
];

// Combined array of all portfolio items (for ProjectDetail to search by ID)
export const allPortfolioItems: PortfolioItem[] = [
    ...column1Items,
    ...column2Items,
    ...column3Items,
    ...column4Items,
];
