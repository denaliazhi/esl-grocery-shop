/**
 * This is the core component.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getImagePath } from "./utils";
import { backgroundImages, script, tabs } from "./data/lesson-content";

import StoryMode from "./components/StoryMode";
import ShopMode from "./components/ShopMode";
import LessonGuide from "./components/LessonGuide";
import HelpDialog from "./components/HelpDialog";

export default function App() {
  const [showDialog, setShowDialog] = useState(true);
  const location = useLocation().pathname;

  // Pre-load background images for smooth scene transitions
  useEffect(() => {
    backgroundImages.forEach((image) => {
      let path = getImagePath("backgrounds", image);
      const newImage = new Image();
      newImage.src = path;
      window[path] = newImage;
    });
  }, []);

  function handleClick() {
    setShowDialog(!showDialog);
  }

  return (
    <>
      <div>
        <h1>Grocery Shopping</h1>
        <HelpDialog
          isOpen={showDialog}
          handleClick={handleClick}
          closeText={location === "/" ? "Start" : "Close"}
        />
        {location === "/" ? (
          <StoryMode setting="storefront" script={script.intro} next="lobby" />
        ) : location === "/end" ? (
          <StoryMode setting="checkout" script={script.end} next="" />
        ) : (
          // If neither start nor end of lesson, then user is "shopping"
          <ShopMode />
        )}
        <LessonGuide tabs={tabs} />
      </div>
    </>
  );
}
