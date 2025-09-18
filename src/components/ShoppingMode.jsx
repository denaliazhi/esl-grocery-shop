/**
 * This component simulates the process
 * of online grocery shopping.
 */

import { main, sectionDetails } from "../data/lesson-content";
import inventory from "../data/inventory.js";
import StoreNav from "./StoreNav.jsx";
import CartIcon from "./CartIcon.jsx";
import NarrationBar from "./NarrationBar";
import { Outlet } from "react-router";
import { useState } from "react";

export default function ShoppingMode({ scene, nextScene }) {
  console.log("rendered");
  const [activeSection, setActiveSection] = useState("");
  const [items, setItems] = useState(modify(inventory));
  const [cart, setCart] = useState({
    count: 0,
    totalCost: 0,
  });

  console.log(items["bakery"][0]);
  const [background, setBackground] = useState(main[scene].background);
  const [line, setLine] = useState(main[scene].script[0]);

  function modify(original) {
    let modified = {};
    for (let key of Object.keys(original)) {
      modified[key] = original[key].map((item) => {
        item["id"] = crypto.randomUUID();
        item["count"] = 0;
        return item;
      });
    }
    return modified;
  }

  function select(e) {
    let selected = e.target.id;
    setActiveSection(selected);
    setBackground(selected.replace("_", "-"));
    setLine(sectionDetails[selected]);
  }

  // TO DO: think this breaks SOLID
  // Update item's count, cart's total count, and cart's total cost
  function updateCount(e, num) {
    const product = e.target.closest(".product");
    const section = product.dataset.section;
    console.log(product.id);
    const index = items[section].findIndex((item) => item.id === product.id);
    console.log(index);
    const updatedItems = items[section].map((item, i) => {
      if (i === index) {
        setCart({
          count: cart.count + num,
          totalCost: cart.totalCost + num * item.unitPrice,
        });
        return { ...item, count: item.count + num };
      }
      return item;
    });
    console.log(updatedItems);
    setItems({
      ...items,
      [section]: updatedItems,
    });
  }

  return (
    <div
      className="viewer"
      style={{ backgroundImage: `url(backgrounds/${background}.png)` }}
    >
      <div className="virtual-store">
        <StoreNav
          allSections={Object.keys(inventory)}
          selected={activeSection}
          handleClick={select}
        />
        <Outlet context={[activeSection, items, updateCount, cart, setLine]} />
        <CartIcon data={cart} read={setLine} />
      </div>
      <NarrationBar text={line} mode={scene.mode}></NarrationBar>
    </div>
  );
}
