<template>
    <footer class="bg-gray-50 border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Logo and Description -->
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <img
                            src="/images/logo.png"
                            alt="Luxury bathroom interior"
                            class="w-auto h-16"
                            @error="handleHeroImageError"
                        />
                    </div>
                    <p class="text-gray-600 mb-4">
                        Where creativity meets innovation. We specialize in
                        creating stunning CGI images for interior design
                        projects, setting new standards in the industry.
                    </p>
                </div>

                <!-- Contact Info -->
                <div class="md:text-right">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">
                        Enquiries:
                    </h3>
                    <a
                        href="mailto:danieljonesdigital@gmail.com"
                        class="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        danieljonesdigital@gmail.com
                    </a>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-8 pt-8 border-t border-gray-200">
                <p class="text-center text-gray-500 text-sm">
                    © {{ currentYear }} Daniel Jones Digital. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
const handleHeroImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};
</script>
