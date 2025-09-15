// import Viewer from "./components/Viewer";
import Shelf from "./components/Shelf";
import inventory from "./data/inventory.js";
// import { useState } from "react";

export default function App() {
  return (
    <>
      {/* <header>Header</header> */}
      <Shelf display={inventory.produce} />
      {/* <footer>Footer</footer> */}
    </>
  );
}
