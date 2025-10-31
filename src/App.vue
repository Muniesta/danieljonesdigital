<script setup lang="ts">
import { ref, onMounted } from "vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import LoadingAnimation from "./components/LoadingAnimation.vue";
import { useLoadingState } from "./composables/useLoadingState";

const { checkLoadingSeen, markLoadingSeen } = useLoadingState();
const isLoading = ref(true);

const handleLoadingComplete = () => {
    isLoading.value = false;
    markLoadingSeen();
};

onMounted(() => {
    // Check if we should skip loading for repeat visitors
    if (!checkLoadingSeen()) {
        isLoading.value = false;
    }

    // Allow skipping with ESC key (for development)
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isLoading.value) {
            isLoading.value = false;
        }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
        document.removeEventListener("keydown", handleEscape);
    };
});
</script>

<template>
    <!-- Loading Animation -->
    <LoadingAnimation v-if="isLoading" @complete="handleLoadingComplete" />

    <!-- Main App Content -->
    <div
        class="min-h-screen flex flex-col"
        :class="{ 'content-hidden': isLoading }"
    >
        <Navigation />

        <main class="flex-1">
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<style scoped>
.content-hidden {
    opacity: 1;
}
</style>
