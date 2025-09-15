import inventory from "./data/inventory.js";
import StoreNav from "./components/StoreNav.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
  const [section, setSection] = useState("");

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

  return (
    <>
      <StoreNav
        allSections={Object.keys(inventory)}
        selected={section}
        onClick={select}
      />
      <Outlet context={[section, items]} />
    </>
  );
}
