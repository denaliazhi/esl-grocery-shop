/**
 * This component displays content in a
 * linear click-through format.
 */
import NarrationBar from "./NarrationBar";
import main from "../data/lesson-content";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function TutorialMode({ scene, setScene }) {
  const navigate = useNavigate();
  // Track current line in scene
  const [lineIndex, setLineIndex] = useState(0);
  let line = main[scene].script[lineIndex];

  function nextLine() {
    if (lineIndex !== main[scene].script.length - 1) {
      setLineIndex(lineIndex + 1);
    } else if (scene === "intro") {
      setScene("shopping");
      navigate("/lobby");
    } else {
      // TO DO: trigger end screen
      return;
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
