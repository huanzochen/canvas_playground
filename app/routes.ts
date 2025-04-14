import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/main.tsx"),
  route("simple-hook", "routes/simpleHook.tsx"),
  route("hook", "routes/hook.tsx"),
  route("left-panel", "routes/leftPanel.tsx"),
] satisfies RouteConfig;
