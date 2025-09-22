/**
 * This component allows the user to move between sections
 * of the grocery store.
 */
import { capitalize } from "../utils";
import { Link } from "react-router";

export default function ShopNav({ allSections, selected }) {
  return (
    <ul className={selected === "lobby" ? "shop-nav highlighted" : "shop-nav"}>
      {allSections.map((section) => {
        return (
          <li
            key={section}
            className={section === selected ? "selected" : null}
          >
            <Link to={`/${section}`} id={section}>
              {capitalize(section)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
