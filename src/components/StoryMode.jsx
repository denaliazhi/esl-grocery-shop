/**
 * This component displays content in a
 * linear click-through format.
 */
import { useState } from "react";
import { useNavigate } from "react-router";
import NarrationBar from "./NarrationBar";

export default function StoryMode({ setting, script, next }) {
  const navigate = useNavigate();

  const [lineIndex, setLineIndex] = useState(0);
  let line = script[lineIndex];

  function nextLine() {
    if (lineIndex !== script.length - 1) {
      setLineIndex(lineIndex + 1);
    } else {
      navigate("/" + next);
    }
  }
  return (
    <div
      className="viewer"
      style={{
        backgroundImage: `url(backgrounds/${setting}.png)`,
      }}
    >
      <NarrationBar
        text={line}
        isClickable={true}
        handleClick={nextLine}
      ></NarrationBar>
    </div>
  );
}
