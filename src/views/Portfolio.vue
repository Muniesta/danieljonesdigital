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

                <MasonryGrid v-else />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MasonryGrid from "../components/MasonryGrid.vue";

// State
const loading = ref(true);

// Lifecycle
onMounted(async () => {
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    loading.value = false;
});
</script>
