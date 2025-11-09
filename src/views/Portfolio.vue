<template>
    <div class="min-h-screen pt-16">
        <!-- Header -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1
                        class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Portfolio
                    </h1>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore my collection of creative projects showcasing
                        innovation and attention to detail
                    </p>
                </div>

                <!-- Category Tabs -->
                <div class="flex justify-center mt-8">
                    <div
                        class="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1"
                    >
                        <button
                            @click="activeCategory = 'interior'"
                            :class="[
                                'px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                                activeCategory === 'interior'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900',
                            ]"
                        >
                            Interior Design
                        </button>
                        <button
                            @click="activeCategory = 'product'"
                            :class="[
                                'px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                                activeCategory === 'product'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900',
                            ]"
                        >
                            Product Shots
                        </button>
                        <button
                            @click="activeCategory = 'exterior'"
                            :class="[
                                'px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                                activeCategory === 'exterior'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900',
                            ]"
                        >
                            Exterior Shots
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Grid -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div v-if="loading" class="text-center py-12">
                    <div
                        class="inline-block w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"
                    ></div>
                    <p class="mt-4 text-gray-600">Loading portfolio</p>
                </div>

                <MasonryGrid v-else :category="activeCategory" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import MasonryGrid from "../components/MasonryGrid.vue";

const route = useRoute();

// State
const loading = ref(true);
const activeCategory = ref<"interior" | "product" | "exterior">("interior");

// Lifecycle
onMounted(async () => {
    // Check if there's a category in the query params
    const categoryParam = route.query.category as string;
    if (
        categoryParam === "interior" ||
        categoryParam === "product" ||
        categoryParam === "exterior"
    ) {
        activeCategory.value = categoryParam;
    }

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    loading.value = false;
});
</script>
