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
                <div class="absolute inset-0 bg-black/20"></div>
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
                    Digital Artist & Creative Professional specializing in CGI,
                    3D visualization, and digital design.
                </p>
                <router-link
                    to="/portfolio"
                    class="btn-primary inline-block animate-slide-up"
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
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        A selection of recent projects showcasing creative
                        problem-solving and technical expertise
                    </p>
                </div>

                <!-- Portfolio Showcase -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div
                        class="group relative h-64 bg-gray-100 rounded-lg overflow-hidden"
                    >
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
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
                                3D Visualization
                            </h3>
                        </div>
                    </div>

                    <div
                        class="group relative h-64 bg-gray-100 rounded-lg overflow-hidden"
                    >
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
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
                                Digital Design
                            </h3>
                        </div>
                    </div>

                    <div
                        class="group relative h-64 bg-gray-100 rounded-lg overflow-hidden"
                    >
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
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
                                Creative Solutions
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <router-link to="/portfolio" class="btn-outline">
                        View Full Portfolio
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Skills/Expertise Section -->
        <section class="py-20 bg-gray-50">
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
                                class="w-8 h-8 text-white"
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
                            CGI & 3D
                        </h3>
                        <p class="text-gray-600">
                            Photorealistic rendering and 3D visualization
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Digital Design
                        </h3>
                        <p class="text-gray-600">
                            Creative design and visual communication
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Web Development
                        </h3>
                        <p class="text-gray-600">
                            Modern web technologies and frameworks
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Creative Direction
                        </h3>
                        <p class="text-gray-600">
                            Conceptual thinking and project execution
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
                            I'm a digital artist passionate about creating
                            compelling visual experiences. With expertise in
                            CGI, 3D visualization, and digital design, I
                            transform ideas into stunning visual realities.
                        </p>
                        <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                            My work focuses on pushing creative boundaries while
                            maintaining technical excellence. Whether it's
                            photorealistic rendering, interactive design, or
                            innovative digital solutions, I'm committed to
                            delivering exceptional results.
                        </p>
                        <div class="flex space-x-4">
                            <a
                                href="#"
                                class="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 rounded"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#"
                                class="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats/Achievements Section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div
                            class="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                        >
                            50+
                        </div>
                        <div class="text-gray-600">Projects Completed</div>
                    </div>
                    <div class="text-center">
                        <div
                            class="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                        >
                            5+
                        </div>
                        <div class="text-gray-600">Years Experience</div>
                    </div>
                    <div class="text-center">
                        <div
                            class="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                        >
                            30+
                        </div>
                        <div class="text-gray-600">Happy Clients</div>
                    </div>
                    <div class="text-center">
                        <div
                            class="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                        >
                            100%
                        </div>
                        <div class="text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const handleHeroImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};

const handleAboutImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = "none";
};
</script>
