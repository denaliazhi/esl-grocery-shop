/**
 * This component is the app's entry point.
 */

import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { getImagePath } from "./utils";
import { images, script } from "./data/lesson-content";
import StoryMode from "./components/StoryMode";
import ShopMode from "./components/ShopMode";
import LessonGuide from "./components/LessonGuide";

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

  return (
    <>
      <div>
        <h1>Grocery Shopping</h1>
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
