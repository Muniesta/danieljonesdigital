<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
            <div
                v-for="item in column1Items"
                :key="item.id"
                class="group cursor-pointer block"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    >
                        <h3 class="text-lg font-semibold text-white">
                            {{ item.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid gap-4">
            <div
                v-for="item in column2Items"
                :key="item.id"
                class="group cursor-pointer block"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    >
                        <h3 class="text-lg font-semibold text-white">
                            {{ item.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid gap-4">
            <div
                v-for="item in column3Items"
                :key="item.id"
                class="group cursor-pointer block"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    >
                        <h3 class="text-lg font-semibold text-white">
                            {{ item.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid gap-4">
            <div
                v-for="item in column4Items"
                :key="item.id"
                class="group cursor-pointer block"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover block"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    >
                        <h3 class="text-lg font-semibold text-white">
                            {{ item.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

interface Props {
    category: "interior" | "product" | "exterior";
}

const props = defineProps<Props>();
const router = useRouter();

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    type?: "image" | "video";
    images?: string[];
}

// Interior Design Portfolio Items
const interiorItems: PortfolioItem[] = [
    {
        id: 101,
        title: "Luxurious Bathroom Design",
        description: "Modern bathroom with elegant fixtures and finishes",
        image: "/images/portfolio/interior/Bathroom_Shot_Cameo_Magnific.png",
        category: "interior",
        images: [
            "/images/portfolio/interior/Bathroom_Shot_Cameo_Magnific.png",
            "/images/portfolio/interior/Bathroom_Shot_FINAL_MAGNIFIC.png",
        ],
    },
    {
        id: 102,
        title: "Contemporary Kitchen Space",
        description: "Sleek kitchen design with modern appliances",
        image: "/images/portfolio/interior/Kitchen_Final_Magnific.png",
        category: "interior",
        images: ["/images/portfolio/interior/Kitchen_Final_Magnific.png"],
    },
    {
        id: 103,
        title: "Elegant Bathroom Render",
        description: "Photorealistic bathroom visualization",
        image: "/images/portfolio/interior/Bathroom_Shot_FINAL_MAGNIFIC.png",
        category: "interior",
        images: [
            "/images/portfolio/interior/Bathroom_Shot_FINAL_MAGNIFIC.png",
            "/images/portfolio/interior/Bathroom_Shot_Cameo_Magnific.png",
        ],
    },
    {
        id: 104,
        title: "Textured Wallpaper Design",
        description: "Interior wall treatment visualization",
        image: "/images/portfolio/interior/Wallpaper_FINAL_Magnific.png",
        category: "interior",
        images: [
            "/images/portfolio/interior/Wallpaper_FINAL_Magnific.png",
            "/images/portfolio/interior/Wallpaper_GREEN_Magnific.png",
        ],
    },
    {
        id: 105,
        title: "Green Wallpaper Concept",
        description: "Alternative color scheme visualization",
        image: "/images/portfolio/interior/Wallpaper_GREEN_Magnific.png",
        category: "interior",
        images: [
            "/images/portfolio/interior/Wallpaper_GREEN_Magnific.png",
            "/images/portfolio/interior/Wallpaper_FINAL_Magnific.png",
        ],
    },
];

// Product Shots Portfolio Items
const productItems: PortfolioItem[] = [
    // Column 1 - indices 0-2
    {
        id: 201,
        title: "Product Visualization",
        description: "High-quality 3D product rendering",
        image: "/images/portfolio/product/Product_Shot_Magnific.png",
        category: "product",
        images: [
            "/images/portfolio/product/Product_Shot_Magnific.png",
            "/images/portfolio/product/Product_Shot_02_Magnific.png",
        ],
    },
    {
        id: 208,
        title: "Product Detail 1",
        description: "High-resolution product shot",
        image: "/images/portfolio/product/Untitled-1.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-1.jpg"],
    },
    {
        id: 204,
        title: "Final Product Render",
        description: "Polished product visualization",
        image: "/images/portfolio/product/Final_Render_F01_Magnific.png",
        category: "product",
        images: [
            "/images/portfolio/product/Final_Render_F01_Magnific.png",
            "/images/portfolio/product/Fanta_F01_Interactive LightMix_Magnific.png",
        ],
    },
    // Column 2 - indices 3-5
    {
        id: 203,
        title: "Product Shot Detail",
        description: "Alternative product angle",
        image: "/images/portfolio/product/Product_Shot_02_Magnific.png",
        category: "product",
        images: [
            "/images/portfolio/product/Product_Shot_02_Magnific.png",
            "/images/portfolio/product/Product_Shot_Magnific.png",
        ],
    },
    {
        id: 207,
        title: "Tire Visualization",
        description: "Detailed tire product render",
        image: "/images/portfolio/product/Tyres_02_Magnific.png",
        category: "product",
        images: ["/images/portfolio/product/Tyres_02_Magnific.png"],
    },
    {
        id: 209,
        title: "Product Detail 2",
        description: "Alternative product visualization",
        image: "/images/portfolio/product/Untitled-11.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-11.jpg"],
    },
    // Column 3 - indices 6-8
    {
        id: 205,
        title: "Interactive Lighting",
        description: "Product with dynamic lighting setup",
        image: "/images/portfolio/product/Fanta_F01_Interactive LightMix_Magnific.png",
        category: "product",
        images: [
            "/images/portfolio/product/Fanta_F01_Interactive LightMix_Magnific.png",
        ],
    },
    {
        id: 202,
        title: "Drawer System Animation",
        description: "Animated product visualization",
        image: "/images/portfolio/product/Drawers_0000.mp4",
        category: "product",
        type: "video",
        images: ["/images/portfolio/product/Drawers_0000.mp4"],
    },
    {
        id: 210,
        title: "Product Detail 3",
        description: "Product rendering showcase",
        image: "/images/portfolio/product/Untitled-111.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-111.jpg"],
    },
    // Column 4 - indices 9-11
    {
        id: 206,
        title: "Top-Down Product View",
        description: "Overhead product visualization",
        image: "/images/portfolio/product/Topdown_magnific1.png",
        category: "product",
        images: ["/images/portfolio/product/Topdown_magnific1.png"],
    },
    {
        id: 213,
        title: "Media Centre Animation",
        description: "Interactive media center showcase",
        image: "/images/portfolio/product/Media_Centre.mp4",
        category: "product",
        type: "video",
        images: ["/images/portfolio/product/Media_Centre.mp4"],
    },
    {
        id: 214,
        title: "Wardrobe System Animation",
        description: "Animated wardrobe visualization",
        image: "/images/portfolio/product/wardrobe_0000.mp4",
        category: "product",
        type: "video",
        images: ["/images/portfolio/product/wardrobe_0000.mp4"],
    },
    {
        id: 211,
        title: "Product Detail 4",
        description: "Professional product visualization",
        image: "/images/portfolio/product/Untitled-1111.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-1111.jpg"],
    },
    {
        id: 212,
        title: "Product Detail 5",
        description: "Detailed product render",
        image: "/images/portfolio/product/Untitled-11111.jpg",
        category: "product",
        images: ["/images/portfolio/product/Untitled-11111.jpg"],
    },
];

// Exterior Shots Portfolio Items
const exteriorItems: PortfolioItem[] = [
    {
        id: 301,
        title: "Northwest House Exterior",
        description: "Architectural exterior visualization",
        image: "/images/portfolio/exterior/HOUSE_NORTHWEST_[D02].jpg",
        category: "exterior",
        images: ["/images/portfolio/exterior/HOUSE_NORTHWEST_[D02].jpg"],
    },
];

// Get items based on category
const portfolioItems = computed(() => {
    switch (props.category) {
        case "interior":
            return interiorItems;
        case "product":
            return productItems;
        case "exterior":
            return exteriorItems;
        default:
            return interiorItems;
    }
});

// Distribute items across columns to maintain Flowbite layout
const column1Items = computed(() => portfolioItems.value.slice(0, 4));
const column2Items = computed(() => portfolioItems.value.slice(4, 7));
const column3Items = computed(() => portfolioItems.value.slice(7, 11));
const column4Items = computed(() => portfolioItems.value.slice(11, 15));

const navigateToProject = (id: number) => {
    router.push({
        path: `/project/${id}`,
        query: { from: props.category },
    });
};
</script>

<style scoped>
.masonry-item {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
