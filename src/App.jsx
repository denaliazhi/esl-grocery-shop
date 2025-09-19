/**
 * This component is the app's entry point.
 */
import { useState } from "react";
import ShoppingMode from "./components/ShoppingMode";
import TutorialMode from "./components/TutorialMode";

export default function App() {
  const [scene, setScene] = useState("intro");
  return (
    <>
      <div>
        <h1>Grocery Shopping</h1>
        {scene === "intro" || scene === "checkout" ? (
          <TutorialMode scene={scene} nextScene={setScene} />
        ) : (
          <ShoppingMode scene={scene} nextScene={setScene} />
        )}
      </div>
    </>
  );
}
