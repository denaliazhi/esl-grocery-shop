/**
 * This component allows the user to move between sections
 * of the grocery store.
 */

import { Link } from "react-router";

export default function StoreNav({ allSections, selected, handleClick }) {
  return (
    <div className="store-nav">
      {allSections.map((section) => {
        return (
          <Link
            to={`/${section}`}
            id={section}
            key={section}
            className={section === selected ? "selected" : null}
            onClick={(e) => handleClick(e)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        );
      })}
    </div>
  );
}
