import { useState } from "react";
import InStoreMode from "./InStoreMode";
import NarrationBar from "./NarrationBar";
import scenes from "../data/scenes";

export default function Viewer() {
  const [scene, setScene] = useState(scenes[0]);

  return (
    <div
      className="viewer"
      style={{ backgroundImage: `url(${scene.background}.png)` }}
    >
      {scene.name === "shopping" ? <InStoreMode /> : null}
      <NarrationBar read={scene.script} mode={scene.mode}></NarrationBar>
    </div>
  );
}
