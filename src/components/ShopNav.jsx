/**
 * This component allows the user to move between sections
 * of the grocery store.
 */
import { capitalize } from "../utils";
import { Link } from "react-router";

export default function ShopNav({ options, selected, animate }) {
  return (
    <nav className={`shop-nav ${animate ? animate : ""}`}>
      <ul>
        {options.map((option) => {
          return (
            <li
              key={option}
              className={option === selected ? "selected" : null}
            >
              <Link to={`/${option}`} id={option}>
                {capitalize(option)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
