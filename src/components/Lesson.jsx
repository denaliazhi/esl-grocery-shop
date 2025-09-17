/**
 * This component determines which part of
 * the lesson to render.
 */
import { useState } from "react";
import ShoppingMode from "./ShoppingMode";
import TutorialMode from "./TutorialMode";

export default function Lesson() {
  const [scene, setScene] = useState("intro");

  return (
    <>
      {scene === "intro" ? (
        <TutorialMode scene={scene} nextScene={setScene} />
      ) : (
        <ShoppingMode scene={scene} nextScene={setScene} />
      )}
    </>
  );
}
