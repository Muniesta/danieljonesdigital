import { ref } from "vue";

// Check if user has seen the loading animation recently
const LOADING_SEEN_KEY = "djd-loading-seen";
const LOADING_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

export function useLoadingState() {
    const shouldShowLoading = ref(true);

    // Check localStorage to see if loading was recently shown
    const checkLoadingSeen = () => {
        try {
            const lastSeen = localStorage.getItem(LOADING_SEEN_KEY);
            if (lastSeen) {
                const timeDiff = Date.now() - parseInt(lastSeen);
                if (timeDiff < LOADING_DURATION) {
                    shouldShowLoading.value = false;
                    return false;
                }
            }
        } catch (error) {
            // localStorage not available, show loading
        }
        return true;
    };

    // Mark loading as seen
    const markLoadingSeen = () => {
        try {
            localStorage.setItem(LOADING_SEEN_KEY, Date.now().toString());
        } catch (error) {
            // localStorage not available, ignore
        }
    };

    // Skip loading (for development)
    const skipLoading = () => {
        shouldShowLoading.value = false;
    };

    return {
        shouldShowLoading,
        checkLoadingSeen,
        markLoadingSeen,
        skipLoading,
    };
}
