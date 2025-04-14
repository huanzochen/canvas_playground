import type { Route } from "./+types/main";
import { Welcome } from "../welcome/welcome";
import { LeftPanel } from "../components/leftPanel/leftPanel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "leftPanel" },
    { name: "description", content: "leftPanel" },
  ];
}

export default function leftPanel() {
  return (
    <div className="flex flex-col h-screen">
      <Welcome />
      <div className="flex-grow">
        <LeftPanel />
      </div>
    </div>
  );
}
