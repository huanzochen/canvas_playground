import type { Route } from "./+types/main";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Canvas Hook Page" },
    { name: "description", content: "Canvas Hook" },
  ];
}

export default function CanvasHook() {
  return (
    <>
      <Welcome />
      <CanvasHook />
    </>);
}
