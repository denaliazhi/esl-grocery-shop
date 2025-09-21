/**
 * This component allows the user to move between sections
 * of the grocery store.
 */
import { capitalize } from "../utils";
import { Link } from "react-router";

export default function ShopNav({ allSections, selected, read }) {
  return (
    <ul className="shop-nav">
      {allSections.map((section) => {
        return (
          <li
            key={section}
            className={section === selected ? "selected" : null}
          >
            <Link
              to={`/${section}`}
              id={section}
              onClick={() =>
                read({
                  target: "nav-bar",
                })
              }
            >
              {capitalize(section)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
