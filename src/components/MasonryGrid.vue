<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
            <div
                v-for="item in column1Items"
                :key="item.id"
                class="group cursor-pointer"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                class="group cursor-pointer"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                class="group cursor-pointer"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                class="group cursor-pointer"
                @click="navigateToProject(item.id)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <video
                        v-if="item.type === 'video'"
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                    <img
                        v-else
                        class="h-auto max-w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <!-- Hover Overlay -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
import { useRouter } from "vue-router";
import {
    column1Items,
    column2Items,
    column3Items,
    column4Items,
} from "../data/portfolioData";

const router = useRouter();

const navigateToProject = (id: number) => {
    router.push({
        path: `/project/${id}`,
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
