import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

// routes base
const routesBase: RouteConfig = [
    index("routes/home.tsx"),
]

// routes with layout
const routesWithLayout: RouteConfig = [
    layout("routes/layouts/layout.tsx", routesBase),
]

// routes without layout
const routes: RouteConfig = []

// merge routes with layout and routes
const routesConfig: RouteConfig = [
    ...routesWithLayout,
    ...routes
];

export default routesConfig satisfies RouteConfig;
