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
  const [activeSection, setActiveSection] = useState("");
  const [products, setProducts] = useState(modify(inventory));
  const [cart, setCart] = useState({
    count: 0,
    totalCost: 0,
  });

  const [background, setBackground] = useState(main[scene].background);
  const [line, setLine] = useState(main[scene].script[0]);

  /* 
  Adds fields to each object in a given dataset.
  */
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

  // TO DO: move this to separate file w other event handlers
  function select(e) {
    let selected = e.target.id;
    setActiveSection(selected);
    setBackground(selected.replace("_", "-"));
    setLine(sectionDetails[selected]);
  }

  /* 
  Keeps the cart and products states in sync. 
  Called whenever the user modifies a item's count
  by `num` where `num` is 1, -1, or -[item.count].
  */
  function updateCount(e, num) {
    const clicked = e.target.closest(".product");
    const section = clicked.dataset.section;

    const updatedSection = products[section].map((item) => {
      if (item.id === clicked.id) {
        // Update state of cart
        setCart({
          count: cart.count + num,
          totalCost: cart.totalCost + num * item.unitPrice,
        });
        return { ...item, count: item.count + num };
      } else {
        return item;
      }
    });
    // Update state of products
    setProducts({
      ...products,
      [section]: updatedSection,
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
        <Outlet
          context={[activeSection, products, updateCount, cart, setLine]}
        />
        <CartIcon data={cart} read={setLine} />
      </div>
      <NarrationBar text={line} mode={scene.mode}></NarrationBar>
    </div>
  );
}
