/**
 * This component displays content in a
 * linear click-through format.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NarrationBar from "./NarrationBar";

export default function StoryMode({ setting, script, next, transcribe }) {
  const navigate = useNavigate();

  const [lineIndex, setLineIndex] = useState(0);
  let line = script[lineIndex];

  useEffect(() => {
    transcribe(line);
  }, [lineIndex]);

  function nextLine() {
    if (lineIndex !== script.length - 1) {
      console.log("next...");
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
