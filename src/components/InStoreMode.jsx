/**
 * This component manages the overall shopping experience.
 * It tracks what section of the store the user is in
 * and the items that they've put in their cart.
 */

import inventory from "../data/inventory.js";
import StoreNav from "./StoreNav.jsx";
import CartIcon from "./CartIcon.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

export default function InStoreMode() {
  const [activeSection, setActiveSection] = useState("");
  // Track all store items and their purchase status
  const [items, setItems] = useState(modify(inventory));
  // Track total item count and cost of items in cart
  const [cart, setCart] = useState({
    count: 0,
    totalCost: 0,
  });

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
    setActiveSection(e.target.id);
  }

  // TO DO: think this breaks SOLID
  // Update item's count, cart's total count, and cart's total cost
  function updateCount(e, num) {
    const product = e.target.closest(".product");
    const section = product.dataset.section;
    const index = items[section].findIndex((item) => item.id === product.id);
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
    setItems({
      ...items,
      [section]: updatedItems,
    });
  }

  return (
    <div class="virtual-store">
      <StoreNav
        allSections={Object.keys(inventory)}
        selected={activeSection}
        handleClick={select}
      />
      <Outlet context={[activeSection, items, updateCount, cart]} />
      <CartIcon data={cart} />
    </div>
  );
}
