/**
 * This component manages the overall shopping experience.
 * It tracks what section of the store the user is in
 * and the items that they've put in their cart.
 */

import inventory from "./data/inventory.js";
import StoreNav from "./components/StoreNav.jsx";
import CartIcon from "./components/CartIcon.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
  // Track active section in grocery store
  const [section, setSection] = useState("");
  // Track all items and their purchase status
  const [items, setItems] = useState(modify(inventory));

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
    setSection(e.target.id);
  }

  function setCount(itemId, num) {
    const index = items[section].findIndex((item) => item.id === itemId);
    const updatedItems = items[section].map((item, i) => {
      if (i === index) {
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
    <>
      <StoreNav
        allSections={Object.keys(inventory)}
        selected={section}
        handleClick={select}
      />
      <Outlet context={[section, items, setCount]} />
      <CartIcon contents={items} handleClick={setCount} />
    </>
  );
}
