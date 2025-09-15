import inventory from "./data/inventory.js";
import StoreNav from "./components/StoreNav.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
  const [section, setSection] = useState("");

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
      <Outlet context={[section]} />
    </>
  );
}
