<template>
    <div class="group cursor-pointer relative" @click="navigateToProject">
        <img
            :src="item.image"
            :alt="item.title"
            class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
            @error="handleImageError"
        />

        <!-- Category Badge -->
        <div class="absolute top-3 left-3">
            <span
                class="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
            >
                {{ formatCategory(item.category) }}
            </span>
        </div>

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
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { PortfolioItem } from "../types/portfolio";

interface Props {
    item: PortfolioItem;
}

const props = defineProps<Props>();
const router = useRouter();

const navigateToProject = () => {
    router.push(`/project/${props.item.id}`);
};

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
</script>

<style scoped>
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
