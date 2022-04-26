import {hashLocationPlugin, ReactStateDeclaration, servicesPlugin, UIRouterReact} from "@uirouter/react";

export const router = new UIRouterReact();


const states: ReactStateDeclaration[] = [
    {
        url: "/",
        name: "login.**",
        lazyLoad: () => import("./LoginPage")
    },
    {
        url: "/dashboard",
        name: "dashboard.**",
        lazyLoad: () => import("./Dashboard")
    },
    {
        url: "/doctors",
        name: "doctors.**",
        lazyLoad: () => import("./Doctors")
    },
];

states.forEach(state => router.stateRegistry.register(state));

router.urlRouter.otherwise("/");
router.plugin(hashLocationPlugin);
router.plugin(servicesPlugin);

export const $state = router.stateService;
export const $transition = router.transitionService;
