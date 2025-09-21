import { useState } from "react";
import { tabs } from "../data/lesson-content";
import Tab from "./Tab";
import { capitalize, getImagePath } from "../utils";

export default function LessonGuide() {
  const options = Object.keys(tabs);
  const [selected, setSelected] = useState(options[0]);

  function select(tab) {
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
              {capitalize(option)}
            </li>
          ))}
        </ul>
        <Tab isFirst={selected === options[0]} contents={tabs[selected]}></Tab>
      </div>
    </>
  );
}
