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
    <div className="flex flex-col h-screen">
      <Welcome />
      <div className="flex-grow">
        <CanvasHook />
      </div>
    </div>);
}
