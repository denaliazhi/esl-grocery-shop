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
  const location = useLocation().pathname;
  console.log(location);
  const [transcript, setTranscript] = useState([]);

  // Pre-load background images for smooth scene transitions
  useEffect(() => {
    backgroundImages.forEach((image) => {
      let path = getImagePath("backgrounds", image);
      const newImage = new Image();
      newImage.src = path;
      window[path] = newImage;
    });
  }, []);

  function transcribe(line) {
    if (line !== "" && line !== undefined) {
      setTranscript([...transcript, line]);
    }
  }

  return (
    <>
      <header>Everyday English</header>
      <div>
        <h1>Grocery Shopping</h1>
        <HelpDialog closeText={location === "/" ? "Start" : "Close"}>
          <h2>Introduction</h2>
          <p>Learn how to describe a trip to the grocery store.</p>
          <ol>
            <li>Click on or hover over items on the screen.</li>
            <li>Review the sentences that appear in the message bar below.</li>
          </ol>
        </HelpDialog>
        {location === "/" ? (
          <StoryMode
            key="storefront"
            setting="storefront"
            script={script.intro}
            next="lobby"
            transcribe={transcribe}
          />
        ) : location === "/end" ? (
          <StoryMode
            key="checkout"
            setting="checkout"
            script={script.end}
            next=""
            transcribe={transcribe}
          />
        ) : (
          // If neither start nor end of lesson, then user is "shopping"
          <ShopMode transcribe={transcribe} />
        )}
        <LessonGuide tabs={tabs} transcript={transcript} />
      </div>
      <footer>Created by Denalia Zhi</footer>
    </>
  );
}
