import type { Route } from "./+types/main";
import { Welcome } from "../welcome/welcome";
import { CanvasHook } from "../components/canvasHook"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Simple Hook Page" },
    { name: "description", content: "Simple Hook" },
  ];
}

export default function SimpleHook() {
  return (
    <>
      <Welcome />
      <CanvasHook />
    </>);
}
