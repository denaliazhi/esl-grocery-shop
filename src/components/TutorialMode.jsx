/**
 * This component displays content in a
 * linear click-through format.
 */
import NarrationBar from "./NarrationBar";
import { main } from "../data/lesson-content";
import { useState } from "react";

export default function TutorialMode({ scene, nextScene }) {
  // Track current line in scene
  const [lineIndex, setLineIndex] = useState(0);
  let line = main[scene].script[lineIndex];

  function nextLine() {
    if (lineIndex !== main[scene].script.length - 1) {
      setLineIndex(lineIndex + 1);
    } else {
      nextScene("shopping");
    }
  }
  return (
    <div
      className="viewer"
      style={{
        backgroundImage: `url(backgrounds/${main[scene].background}.png)`,
      }}
    >
      <NarrationBar
        text={line}
        showNext={true}
        handleClick={nextLine}
      ></NarrationBar>
    </div>
  );
}
