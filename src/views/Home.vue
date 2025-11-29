<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section
            class="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <!-- Hero Image -->
            <div class="absolute inset-0 z-0">
                <img
                    src="/images/hero.avif"
                    alt="Luxury bathroom interior"
                    class="w-full h-full object-cover"
                    @error="handleHeroImageError"
                />
                <div class="absolute inset-0"></div>
            </div>

            <!-- Hero Content -->
            <div
                class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
            >
                <h1
                    class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
                >
                    Daniel Jones
                </h1>
                <p
                    class="text-lg md:text-xl lg:text-2xl font-light mb-8 animate-slide-up max-w-2xl mx-auto"
                >
                    Senior Digital Artist & Creative Professional specializing
                    in CGI, 3D visualization, and digital design.
                </p>
                <router-link
                    to="/portfolio"
                    class="inline-block animate-slide-up text-white px-6 py-3 rounded-full font-medium border-2 border-white/50 hover:bg-white/90 hover:text-gray-800 hover:border-white transition-all duration-200"
                    style="animation-delay: 0.2s"
                >
                    View Portfolio
                </router-link>
            </div>

            <!-- Scroll Indicator -->
            <div
                class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div
                    class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                >
                    <div
                        class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"
                    ></div>
                </div>
            </div>
        </section>

        <!-- Portfolio Preview Section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2
                        class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Featured Work
                    </h2>
                    <p class="text-lg text-gray-600 max-w-5xl mx-auto">
                        A selection of recent projects showcasing creative
                        problem-solving and technical expertise
                    </p>
                </div>

                <!-- Portfolio Showcase -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <router-link
                        to="/portfolio"
                        class="group relative h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer block"
                    >
                        <img
                            src="/images/thumbs/interior_thumb.jpg"
                            alt="Creative Projects"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"
                        ></div>
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            <h3 class="text-white text-2xl font-bold">
                                Interior Design
                            </h3>
                        </div>
                    </router-link>

                    <router-link
                        to="/portfolio"
                        class="group relative h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer block"
                    >
                        <img
                            src="/images/thumbs/product_thumb.jpg"
                            alt="Digital Solutions"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"
                        ></div>
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            <h3 class="text-white text-2xl font-bold">
                                Product Shots
                            </h3>
                        </div>
                    </router-link>

                    <router-link
                        to="/portfolio"
                        class="group relative h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer block"
                    >
                        <img
                            src="/images/thumbs/exterior_thumb.jpg"
                            alt="Professional Work"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"
                        ></div>
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            <h3 class="text-white text-2xl font-bold">
                                Exterior Shots
                            </h3>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Logo Marquee Section -->
        <section class="py-20 bg-gray-50 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div class="text-center">
                    <h2
                        class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Tools & Software
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional expertise with industry-leading software
                    </p>
                </div>
            </div>
            <div class="relative">
                <div
                    class="marquee"
                    @mouseenter="pauseMarquee"
                    @mouseleave="resumeMarquee"
                >
                    <div ref="marqueeContent" class="marquee-content">
                        <div class="marquee-group">
                            <img
                                src="/logos/3ds-max-logo-png_seeklogo-482396.png"
                                alt="3ds Max"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/autodesk_maya-logo_brandlogos.net_x7aqy.png"
                                alt="Maya"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/Adobe_Photoshop_CC_icon.svg.png"
                                alt="Photoshop"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/Adobe_After_Effects_CC_icon.svg.png"
                                alt="After Effects"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/Adobe-InDesign-Logo.png"
                                alt="InDesign"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/substance-painter-logo-png_seeklogo-436297.png"
                                alt="Substance Painter"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/vray-s4kft0awlfjpivrqh8io.png"
                                alt="V-Ray"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/unreal-engine-xwo7bd8vu6fzpnkcif.png"
                                alt="Unreal Engine"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/png-clipart-zbrush-digital-sculpting-human-anatomy-logo-cad-3d-computer-graphics-text.png"
                                alt="ZBrush"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/blackmagic_design_dv_stufus_fusion_studio_for_mac_1098557.png"
                                alt="Fusion Studio"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/png-clipart-rendering-render-farm-autodesk-3ds-max-arnold-computer-software-corona-3d-computer-graphics-logo.png"
                                alt="Corona Renderer"
                                class="marquee-logo"
                            />
                        </div>
                        <!-- Duplicate for seamless loop -->
                        <div class="marquee-group" aria-hidden="true">
                            <img
                                src="/logos/3ds-max-logo-png_seeklogo-482396.png"
                                alt="3ds Max"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/autodesk_maya-logo_brandlogos.net_x7aqy.png"
                                alt="Maya"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/Adobe_Photoshop_CC_icon.svg.png"
                                alt="Photoshop"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/Adobe_After_Effects_CC_icon.svg.png"
                                alt="After Effects"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/Adobe-InDesign-Logo.png"
                                alt="InDesign"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/substance-painter-logo-png_seeklogo-436297.png"
                                alt="Substance Painter"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/vray-s4kft0awlfjpivrqh8io.png"
                                alt="V-Ray"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/unreal-engine-xwo7bd8vu6fzpnkcif.png"
                                alt="Unreal Engine"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/png-clipart-zbrush-digital-sculpting-human-anatomy-logo-cad-3d-computer-graphics-text.png"
                                alt="ZBrush"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/blackmagic_design_dv_stufus_fusion_studio_for_mac_1098557.png"
                                alt="Fusion Studio"
                                class="marquee-logo"
                            />
                            <img
                                src="/logos/png-clipart-rendering-render-farm-autodesk-3ds-max-arnold-computer-software-corona-3d-computer-graphics-logo.png"
                                alt="Corona Renderer"
                                class="marquee-logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills/Expertise Section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2
                        class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Skills & Expertise
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Technical proficiency combined with creative vision
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-10 h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Visualization
                        </h3>
                        <p class="text-gray-600">
                            Expertise in offline rendering and real time 3D
                            visualization workflows. Proficient in software
                            tools such as 3ds Max, Corona, Substance Suite.
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <img
                                src="/images/post_production.png"
                                alt="Post Production"
                                class="w-full h-full object-contain"
                            />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Post Production
                        </h3>
                        <p class="text-gray-600">
                            Proficient in Adobe Photoshop, After Effects, and
                            Fusion to enhance and aid the production workflow.
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <img
                                src="/images/webgl.png"
                                alt="WebGL"
                                class="w-full h-full object-contain"
                            />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            WebGL and Optimisations
                        </h3>
                        <p class="text-gray-600">
                            Full understanding and utilization of low poly work
                            flow and asset creation to ensure fast running times
                            with any applications.
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <img
                                src="/images/code.png"
                                alt="Code"
                                class="w-full h-full object-contain"
                            />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Code
                        </h3>
                        <p class="text-gray-600">
                            Using Python to enhance and optimize work flows
                            alongside AI, creating scripts and executables for
                            software such as Photoshop and Substance Painter.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="py-20 bg-black text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <img
                            src="/images/kitchen.avif"
                            alt="Modern kitchen design"
                            class="w-full h-96 object-cover rounded-lg"
                            @error="handleAboutImageError"
                        />
                    </div>
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">
                            About Me
                        </h2>
                        <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                            I’m a Senior 3D Artist with over 7 years of
                            experience specializing in CGI visualization for the
                            Kitchen, Bedroom, and Bathroom (KBB) industry. My
                            work bridges creativity and technology, transforming
                            ideas into photorealistic imagery, immersive
                            environments, and interactive real-time experiences
                            that bring concepts to life.
                        </p>
                        <div class="flex space-x-4">
                            <a
                                href="mailto:danieljonesdigital@gmail.com"
                                class="bg-white text-black px-6 py-3 font-medium hover:bg-gray-500 transition-colors duration-200 rounded"
                            >
                                Get In Touch
                            </a>
                            <button
                                @click="downloadCV"
                                class="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
                            >
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";
import { onMounted, ref } from "vue";

const handleHeroImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};

const handleAboutImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};

const downloadCV = () => {
    // Trigger confetti animation
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });

    // Download the CV
    const link = document.createElement("a");
    link.href = "/cv/Daniel_Jones_Digital_CV_2025.pdf";
    link.download = "Daniel_Jones_Digital_CV_2025.pdf";
    link.click();
};

// Marquee animation
const marqueeContent = ref<HTMLElement | null>(null);
let scrollPosition = 0;
let isPaused = false;

const animateMarquee = () => {
    if (!isPaused && marqueeContent.value) {
        scrollPosition -= 0.5; // Speed: pixels per frame (increase for faster)

        const firstGroup = marqueeContent.value.querySelector(
            ".marquee-group"
        ) as HTMLElement;
        if (firstGroup) {
            const groupWidth = firstGroup.offsetWidth;

            // Reset when first group is completely scrolled out
            if (Math.abs(scrollPosition) >= groupWidth) {
                scrollPosition = 0;
            }

            marqueeContent.value.style.transform = `translateX(${scrollPosition}px)`;
        }
    }

    requestAnimationFrame(animateMarquee);
};

onMounted(() => {
    animateMarquee();
});

const pauseMarquee = () => {
    isPaused = true;
};

const resumeMarquee = () => {
    isPaused = false;
};
</script>

<style scoped>
.marquee {
    width: 100%;
    overflow: hidden;
    position: relative;
    background: rgb(249 250 251);
}

.marquee-content {
    display: flex;
    will-change: transform;
}

.marquee-group {
    display: flex;
    padding: 1rem 0;
    flex-shrink: 0;
}

.marquee-logo {
    height: 80px;
    width: auto;
    margin: 0 3rem;
    object-fit: contain;
    transition: filter 0.3s ease, transform 0.3s ease;
    flex-shrink: 0;
}

.marquee-logo:hover {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1);
}
</style>
