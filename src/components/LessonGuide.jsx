/**
 * This component displays supporting information
 * (e.g. prereqs, teaching notes, attributions) as tabs
 * under the main lesson content.
 */

import { useState } from "react";
import { capitalize, getImagePath } from "../utils";

export default function LessonGuide({ tabs }) {
  const tabNames = Object.keys(tabs);
  const [selected, setSelected] = useState(tabNames[0]);
  let index = tabNames.indexOf(selected);

  // Determine animation applied to selected tab
  const [slide, setSlide] = useState("");

  // Handle when user clicks on a tab
  function handleSelect(tab) {
    let newIndex = tabNames.indexOf(tab);
    if (newIndex !== index) {
      if (newIndex < index) {
        setSlide("slideLeft");
      } else {
        setSlide("slideRight");
      }
      setSelected(tab);
    }
  }

  return (
    <>
      <div className="lesson-guide">
        <ul className="tab-nav">
          {tabNames.map((name) => (
            <li
              key={name}
              className={name === selected ? "tab-selected" : null}
              onClick={() => handleSelect(name)}
            >
              <img src={getImagePath("icons/", `${name} icon`)} />
              <p>{capitalize(name)}</p>
              {/* A span creates the sliding tab effect */}
              <span
                style={name === selected ? { animationName: slide } : null}
              ></span>
            </li>
          ))}
        </ul>
        <div
          className="tab-contents"
          style={index === 0 ? { borderTopLeftRadius: 0 } : null}
        >
          {tabs[selected].map((section) => (
            <div key={section.heading} className="tab-section">
              <h3>{section.heading}</h3>
              {format(section.content)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Helper function to format tab content
function format(str) {
  let list = str.split("-");
  return (
    <>
      <p>{list[0]}</p>
      {list.length > 1 && (
        <ul>
          {list.slice(1).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
