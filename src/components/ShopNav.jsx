/**
 * This component allows the user to move between sections
 * of the grocery store.
 */
import { capitalize } from "../utils";
import { Link } from "react-router";

export default function ShopNav({ options, selected, animate }) {
  return (
    <ul className={animate ? "shop-nav highlighted" : "shop-nav"}>
      {options.map((options) => {
        return (
          <li
            key={options}
            className={options === selected ? "selected" : null}
          >
            <Link to={`/${options}`} id={options}>
              {capitalize(options)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
