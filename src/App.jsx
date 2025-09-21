/**
 * This component is the app's entry point.
 */

import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { getImagePath } from "./utils";
import { images, script } from "./data/lesson-content";
import Guide from "./components/Guide";
import Store from "./components/Store";
import TabGroup from "./components/TabGroup";

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
          <Guide setting="storefront" script={script.intro} next="lobby" />
        ) : location === "/end" ? (
          <Guide setting="checkout" script={script.end} next="" />
        ) : (
          <Store />
        )}
        <TabGroup />
      </div>
    </>
  );
}
