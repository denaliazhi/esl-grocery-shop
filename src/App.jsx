// import Viewer from "./components/Viewer";
import Shelf from "./components/Shelf";
import inventory from "./data/inventory.js";
import StoreNav from "./components/StoreNav.jsx";
import { useState } from "react";

export default function App() {
  const [section, setSection] = useState("");

  function select(e) {
    setSection(e.target.id);
  }

  return (
    <>
      {/* <header>Header</header> */}
      <StoreNav
        allSections={Object.keys(inventory)}
        selected={section}
        onClick={select}
      />
      {section !== "" && <Shelf display={inventory[section]} />}
      {/* <footer>Footer</footer> */}
    </>
  );
}
