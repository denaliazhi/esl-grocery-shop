import inventory from "./data/inventory.js";
import StoreNav from "./components/StoreNav.jsx";
import Cart from "./components/Cart.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
  // Tracks active section in grocery store
  const [section, setSection] = useState("");
  // Tracks all items and their purchase status
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

  function changeCount(itemId, num) {
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
      <Outlet context={[section, items, changeCount]} />
      <Cart contents={items} />
    </>
  );
}
