import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import ProjectDetail from "../views/ProjectDetail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio,
        },
        {
            path: "/project/:id",
            name: "project-detail",
            component: ProjectDetail,
            props: true,
        },
    ],
    scrollBehavior() {
        // Always scroll to top when navigating
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
