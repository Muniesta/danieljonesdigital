<template>
    <div class="min-h-screen pt-16">
        <div v-if="loading" class="flex items-center justify-center min-h-96">
            <div class="text-center">
                <div
                    class="inline-block w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"
                ></div>
                <p class="mt-4 text-gray-600">Loading project...</p>
            </div>
        </div>

        <div
            v-else-if="!project"
            class="flex items-center justify-center min-h-96"
        >
            <div class="text-center">
                <h1 class="text-2xl font-bold text-gray-900 mb-4">
                    Project Not Found
                </h1>
                <p class="text-gray-600 mb-6">
                    The requested project could not be found.
                </p>
                <router-link to="/portfolio" class="btn-primary">
                    Back to Portfolio
                </router-link>
            </div>
        </div>

        <div v-else>
            <!-- Hero Image -->
            <section class="relative h-96 md:h-[70vh] overflow-hidden">
                <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                />
                <div class="absolute inset-0 bg-black/20"></div>

                <!-- Back Button -->
                <button
                    @click="goBack"
                    class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-white transition-colors duration-200 flex items-center space-x-2"
                >
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                    <span>Back</span>
                </button>

                <!-- Category Badge -->
                <div class="absolute bottom-6 left-6">
                    <span
                        class="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {{ formatCategory(project.category) }}
                    </span>
                </div>
            </section>

            <!-- Project Details -->
            <section class="py-16">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header class="mb-12">
                        <h1
                            class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            {{ project.title }}
                        </h1>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            {{ project.description }}
                        </p>
                    </header>

                    <!-- Additional Images Grid -->
                    <div
                        v-if="project.images && project.images.length > 1"
                        class="mt-12"
                    >
                        <h3 class="text-xl font-bold text-gray-900 mb-6">
                            Gallery
                        </h3>
                        <div
                            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            <div
                                v-for="(image, index) in project.images.slice(
                                    1
                                )"
                                :key="index"
                                class="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-100"
                                @click="openLightbox(image)"
                            >
                                <img
                                    :src="image"
                                    :alt="`${project.title} - Image ${
                                        index + 2
                                    }`"
                                    class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    @error="handleImageError"
                                />
                                <div
                                    class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                ></div>

                                <!-- Zoom Icon -->
                                <div
                                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <div
                                        class="bg-white/90 backdrop-blur-sm rounded-full p-3"
                                    >
                                        <svg
                                            class="w-6 h-6 text-gray-800"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Project Navigation -->
                    <div
                        class="flex justify-between items-center pt-12 border-t border-gray-200"
                    >
                        <router-link
                            v-if="previousProject"
                            :to="`/project/${previousProject.id}`"
                            class="group flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                            <div class="text-left">
                                <p class="text-sm text-gray-500">Previous</p>
                                <p
                                    class="font-medium group-hover:text-gray-900"
                                >
                                    {{ previousProject.title }}
                                </p>
                            </div>
                        </router-link>

                        <router-link to="/portfolio" class="btn-outline">
                            Back to Portfolio
                        </router-link>

                        <router-link
                            v-if="nextProject"
                            :to="`/project/${nextProject.id}`"
                            class="group flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <div class="text-right">
                                <p class="text-sm text-gray-500">Next</p>
                                <p
                                    class="font-medium group-hover:text-gray-900"
                                >
                                    {{ nextProject.title }}
                                </p>
                            </div>
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </section>

            <!-- Lightbox Modal -->
            <Teleport to="body">
                <div
                    v-if="lightboxImage"
                    class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    @click="closeLightbox"
                >
                    <button
                        @click="closeLightbox"
                        class="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                    >
                        <svg
                            class="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <img
                        :src="lightboxImage"
                        :alt="project.title"
                        class="max-w-full max-h-full object-contain"
                        @click.stop
                    />
                </div>
            </Teleport>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    images?: string[];
}

const router = useRouter();
const route = useRoute();

// State
const loading = ref(true);
const lightboxImage = ref<string | null>(null);

// Same portfolio items as in MasonryGrid
const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Modern Architecture Studio",
        description:
            "Contemporary residential design with clean lines and open spaces",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        category: "architecture",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        ],
    },
    {
        id: 2,
        title: "Creative Brand Identity",
        description:
            "Complete brand redesign for tech startup including logo and guidelines",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        category: "branding",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        ],
    },
    {
        id: 3,
        title: "Digital Art Installation",
        description: "Interactive multimedia experience for gallery exhibition",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        category: "digital",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        ],
    },
    {
        id: 4,
        title: "E-commerce Platform",
        description:
            "Custom shopping experience with advanced filtering and checkout",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        category: "web",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        ],
    },
    {
        id: 5,
        title: "Photography Portfolio",
        description:
            "Personal portfolio showcasing landscape and portrait work",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        category: "photography",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        ],
    },
    {
        id: 6,
        title: "Mobile App Design",
        description:
            "Fitness tracking app with gamification and social features",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        category: "mobile",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        ],
    },
    {
        id: 7,
        title: "Urban Planning Concept",
        description: "Sustainable city development with green infrastructure",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        category: "architecture",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        ],
    },
    {
        id: 8,
        title: "Music Festival Branding",
        description: "Complete visual identity for outdoor music festival",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        category: "branding",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        ],
    },
    {
        id: 9,
        title: "Product Visualization",
        description: "3D rendered product shots for premium electronics",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        category: "3d",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        ],
    },
    {
        id: 10,
        title: "Restaurant Website",
        description: "Modern dining experience with online reservation system",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        category: "web",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        ],
    },
    {
        id: 11,
        title: "Fashion Editorial",
        description: "High-fashion photo series for magazine publication",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        category: "photography",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        ],
    },
    {
        id: 12,
        title: "Corporate Dashboard",
        description: "Data visualization platform for business intelligence",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        category: "web",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        ],
    },
];

// Computed properties
const project = computed(() => {
    const projectId = parseInt(route.params.id as string);
    return portfolioItems.find((item) => item.id === projectId);
});

const currentIndex = computed(() => {
    if (!project.value) return -1;
    return portfolioItems.findIndex((item) => item.id === project.value!.id);
});

const previousProject = computed(() => {
    if (currentIndex.value <= 0) return null;
    return portfolioItems[currentIndex.value - 1];
});

const nextProject = computed(() => {
    if (
        currentIndex.value === -1 ||
        currentIndex.value >= portfolioItems.length - 1
    )
        return null;
    return portfolioItems[currentIndex.value + 1];
});

// Methods
const formatCategory = (category: string) => {
    return category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};

const goBack = () => {
    router.push("/");
};

const openLightbox = (image: string) => {
    lightboxImage.value = image;
};

const closeLightbox = () => {
    lightboxImage.value = null;
};

// Lifecycle
onMounted(async () => {
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    loading.value = false;
});

// Close lightbox on escape key
onMounted(() => {
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && lightboxImage.value) {
            closeLightbox();
        }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
        document.removeEventListener("keydown", handleEscape);
    };
});
</script>
