/**
 * This component is the app's entry point.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getImagePath } from "./utils";
import { images, script } from "./data/lesson-content";
import StoryMode from "./components/StoryMode";
import ShopMode from "./components/ShopMode";
import LessonGuide from "./components/LessonGuide";
import HelpDialog from "./components/HelpDialog";

export default function App() {
  const location = useLocation().pathname;

  // Pre-load images
  useEffect(() => {
    images.forEach((image) => {
      let path = getImagePath("backgrounds", image);
      const newImage = new Image();
      newImage.src = path;
      window[path] = newImage;
    });
  }, []);

  const [showDialog, setShowDialog] = useState(true);
  function toggleDialog() {
    setShowDialog(!showDialog);
  }

  return (
    <>
      <div>
        <h1>Grocery Shopping</h1>
        <HelpDialog
          location={location}
          show={showDialog}
          handleClick={toggleDialog}
        />
        {location === "/" ? (
          <StoryMode setting="storefront" script={script.intro} next="lobby" />
        ) : location === "/end" ? (
          <StoryMode setting="checkout" script={script.end} next="" />
        ) : (
          <ShopMode />
        )}
        <LessonGuide />
      </div>
    </>
  );
}
