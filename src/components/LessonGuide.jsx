import { useState } from "react";
import { tabs } from "../data/lesson-content";
import Tab from "./Tab";
import { capitalize, getImagePath } from "../utils";

export default function LessonGuide() {
  const options = Object.keys(tabs);
  const [selected, setSelected] = useState(options[0]);
  let index = options.indexOf(selected);

  const [slide, setSlide] = useState("slideRight");

  function select(tab) {
    let newIndex = options.indexOf(tab);
    if (newIndex > index) {
      setSlide("slideRight");
    } else {
      setSlide("slideLeft");
    }
    setSelected(tab);
  }

  return (
    <>
      <div className="lesson-guide">
        <ul className="tabs">
          {options.map((option) => (
            <li
              key={option}
              className={option === selected ? "tab-selected" : null}
              onClick={() => select(option)}
            >
              <img src={getImagePath("icons/", `${option} icon`)} />
              <p>{capitalize(option)}</p>
              <span
                style={option === selected ? { animationName: slide } : null}
              ></span>
            </li>
          ))}
        </ul>
        <Tab isFirst={selected === options[0]} contents={tabs[selected]}></Tab>
      </div>
    </>
  );
}
