import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/main.tsx"),
  route("canvas-hook", "routes/canvasHook.tsx")

] satisfies RouteConfig;
