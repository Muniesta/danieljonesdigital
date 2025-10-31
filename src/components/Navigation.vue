<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <router-link
                    to="/"
                    class="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
                >
                    <img
                        src="/images/logo.png"
                        alt="Luxury bathroom interior"
                        class="w-full h-16 object-cover"
                        @error="handleHeroImageError"
                    />
                </router-link>

                <!-- Navigation Links -->
                <div class="flex items-center space-x-8">
                    <router-link
                        to="/"
                        class="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        :class="{
                            'text-gray-900 font-semibold':
                                $route.name === 'home',
                        }"
                    >
                        Home
                    </router-link>
                    <router-link
                        to="/portfolio"
                        class="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        :class="{
                            'text-gray-900 font-semibold':
                                $route.name === 'portfolio',
                        }"
                    >
                        Portfolio
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const $route = useRoute();

const handleHeroImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};
</script>
