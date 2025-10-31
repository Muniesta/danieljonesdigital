<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
            <div
                v-for="item in column1Items"
                :key="item.id"
                class="group cursor-pointer relative"
                @click="navigateToProject(item.id)"
            >
                <img
                    class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                    :src="item.image"
                    :alt="item.title"
                />
                <!-- Hover Overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-lg"
                >
                    <div class="p-4 text-white w-full">
                        <h3 class="text-lg font-semibold line-clamp-1">
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
                class="group cursor-pointer relative"
                @click="navigateToProject(item.id)"
            >
                <img
                    class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                    :src="item.image"
                    :alt="item.title"
                />
                <!-- Hover Overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-lg"
                >
                    <div class="p-4 text-white w-full">
                        <h3 class="text-lg font-semibold line-clamp-1">
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
                class="group cursor-pointer relative"
                @click="navigateToProject(item.id)"
            >
                <img
                    class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                    :src="item.image"
                    :alt="item.title"
                />
                <!-- Hover Overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-lg"
                >
                    <div class="p-4 text-white w-full">
                        <h3 class="text-lg font-semibold line-clamp-1">
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
                class="group cursor-pointer relative"
                @click="navigateToProject(item.id)"
            >
                <img
                    class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                    :src="item.image"
                    :alt="item.title"
                />
                <!-- Hover Overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-lg"
                >
                    <div class="p-4 text-white w-full">
                        <h3 class="text-lg font-semibold line-clamp-1">
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

const router = useRouter();

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
}

const portfolioItems: PortfolioItem[] = [
    // Column 1
    {
        id: 1,
        title: "Modern Architecture Studio",
        description:
            "Contemporary residential design with clean lines and open spaces",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        category: "architecture",
    },
    {
        id: 2,
        title: "Creative Brand Identity",
        description:
            "Complete brand redesign for tech startup including logo and guidelines",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        category: "branding",
    },
    {
        id: 3,
        title: "Digital Art Installation",
        description: "Interactive multimedia experience for gallery exhibition",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        category: "digital",
    },
    // Column 2
    {
        id: 4,
        title: "E-commerce Platform",
        description:
            "Custom shopping experience with advanced filtering and checkout",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        category: "web",
    },
    {
        id: 5,
        title: "Photography Portfolio",
        description:
            "Personal portfolio showcasing landscape and portrait work",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        category: "photography",
    },
    {
        id: 6,
        title: "Mobile App Design",
        description:
            "Fitness tracking app with gamification and social features",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        category: "mobile",
    },
    // Column 3
    {
        id: 7,
        title: "Urban Planning Concept",
        description: "Sustainable city development with green infrastructure",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        category: "architecture",
    },
    {
        id: 8,
        title: "Music Festival Branding",
        description: "Complete visual identity for outdoor music festival",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        category: "branding",
    },
    {
        id: 9,
        title: "Product Visualization",
        description: "3D rendered product shots for premium electronics",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        category: "3d",
    },
    // Column 4
    {
        id: 10,
        title: "Restaurant Website",
        description: "Modern dining experience with online reservation system",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        category: "web",
    },
    {
        id: 11,
        title: "Fashion Editorial",
        description: "High-fashion photo series for magazine publication",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        category: "photography",
    },
    {
        id: 12,
        title: "Corporate Dashboard",
        description: "Data visualization platform for business intelligence",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        category: "web",
    },
];

// Distribute items across columns to maintain Flowbite layout
const column1Items = computed(() => portfolioItems.slice(0, 3));
const column2Items = computed(() => portfolioItems.slice(3, 6));
const column3Items = computed(() => portfolioItems.slice(6, 9));
const column4Items = computed(() => portfolioItems.slice(9, 12));

const navigateToProject = (id: number) => {
    router.push(`/project/${id}`);
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
