import { useOutletContext } from "react-router";
import inventory from "../data/inventory.js";

export default function Shelf() {
  const section = useOutletContext();
  const display = inventory[section];
  return (
    <div className="item-shelf">
      {/* TO DO: Add key to each div */}
      {display.map((item) => (
        <div className="item-card">
          <img src={`/${item.name}.png`} alt="Blah blah" width="100" />
          <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
          <p>
            ${item.unitPrice.toFixed(2)} / {item.displayUnit}
          </p>
        </div>
      ))}
    </div>
  );
}
