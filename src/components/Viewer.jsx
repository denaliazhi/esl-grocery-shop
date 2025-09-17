import { useState } from "react";
import InStoreMode from "./InStoreMode";
import NarrationBar from "./NarrationBar";
import scenes from "../data/scenes";

export default function Viewer() {
  let index = 0;
  const [scene, setScene] = useState(scenes[index]);
  const [narration, setNarration] = useState(scene.script);

  function next() {
    index += 1;
    let newScene = scenes[index];
    setScene(newScene);
    setNarration(newScene.script);
  }

  return (
    <div
      className="viewer"
      style={{ backgroundImage: `url(backgrounds/${scene.background}.png)` }}
    >
      {scene.name === "shopping" ? <InStoreMode /> : null}
      <NarrationBar
        read={scene.script}
        mode={scene.mode}
        handleClick={next}
      ></NarrationBar>
    </div>
  );
}
