<template>
    <div v-show="!isAnimationComplete" class="loading-overlay">
        <div
            v-for="column in columns"
            :key="column.index"
            class="loading-column"
            :style="{
                '--delay': `${column.delay}s`,
                left: `${(column.index / totalColumns) * 100}%`,
                width: `${100 / totalColumns}%`,
            }"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const emit = defineEmits<{
    complete: [];
}>();

const isAnimationComplete = ref(false);
const totalColumns = 12;

// Generate column indices with staggered delays
const columns = Array.from({ length: totalColumns }, (_, i) => ({
    index: i,
    delay: i * 0.067, // Reduced from 0.1s to 0.067s (about 1/3 faster)
}));

onMounted(() => {
    // Complete the animation after all columns have finished animating
    setTimeout(() => {
        isAnimationComplete.value = true;
        emit("complete");
    }, 1700); // Reduced from 2500ms: delays (0.8s) + animation (0.8s) + buffer
});
</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background: transparent;
    overflow: hidden;
    pointer-events: none;
}

.loading-column {
    position: absolute;
    top: 0;
    height: 100vh;
    background: #000000;
    animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: var(--delay);
}

@keyframes slideUp {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}
</style>
