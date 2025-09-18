/**
 * This component allows the user to move between sections
 * of the grocery store.
 */
import { Capitalize } from "../utils";
import { Link } from "react-router";

export default function StoreNav({ allSections, selected, handleClick }) {
  return (
    <ul className="store-nav">
      {allSections.map((section) => {
        return (
          <li
            key={section}
            className={section === selected ? "selected" : null}
          >
            <Link
              to={`/${section}`}
              id={section}
              onClick={(e) => handleClick(e)}
            >
              {Capitalize(section)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
