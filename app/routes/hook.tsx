import type { Route } from "./+types/main";
import { Welcome } from "../welcome/welcome";
import { CanvasHook } from "../components/canvasHook/canvasHook"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Canvas Hook Page" },
    { name: "description", content: "Canvas Hook" },
  ];
}

export default function Hook() {
  return (
    <div className="flex flex-col h-screen">
      <Welcome />
      <div className="flex-grow">
        <CanvasHook />
      </div>
    </div>);
}
