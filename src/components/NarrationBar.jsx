import { useState } from "react";

export default function NarrationBar({ read, mode, handleClick }) {
  const [line, setLine] = useState(0);

  function next() {
    if (line !== read.length - 1) {
      setLine(line + 1);
    } else {
      setLine(0);
      handleClick();
    }
  }

  return (
    <div className="narration-bar">
      <p>{read[line]}</p>
      {mode === "tutorial" && <button onClick={next}>Next</button>}
    </div>
  );
}
