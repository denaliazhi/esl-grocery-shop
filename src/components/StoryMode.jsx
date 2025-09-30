/**
 * This component displays content in a
 * linear click-through format.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getImagePath } from "../utils";
import NarrationBar from "./NarrationBar";

export default function StoryMode({ setting, script, next, transcribe }) {
  const navigate = useNavigate();

  const [lineIndex, setLineIndex] = useState(0);
  let line = script[lineIndex];

  console.log(setting);
  console.log(lineIndex);

  useEffect(() => {
    transcribe(line);
  }, [lineIndex]);

  function handleClick() {
    if (lineIndex !== script.length - 1) {
      setLineIndex(lineIndex + 1);
    } else {
      navigate("/" + next);
      transcribe("———————————");
    }
  }
  return (
    <main
      key={setting}
      className="viewer"
      style={{
        backgroundImage: `url(${getImagePath("backgrounds", setting)})`,
      }}
    >
      <NarrationBar
        text={line}
        isClickable={true}
        handleClick={handleClick}
      ></NarrationBar>
    </main>
  );
}
