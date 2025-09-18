/**
 * This component simulates the process
 * of online grocery shopping.
 */

import { getImagePath } from "../utils.js";
import interpret from "../data/shop-narration.js";
import main from "../data/lesson-content";
import inventory from "../data/inventory.js";
import StoreNav from "./StoreNav.jsx";
import CartIcon from "./CartIcon.jsx";
import NarrationBar from "./NarrationBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

export default function ShoppingMode({ scene, nextScene }) {
  const [activeSection, setActiveSection] = useState("");
  const [products, setProducts] = useState(modify(inventory));
  const [cart, setCart] = useState({
    count: 0,
    totalCost: 0,
  });
  const [line, setLine] = useState(main[scene].script[0]);

  let background = `url(backgrounds${getImagePath(
    activeSection !== "" ? activeSection : main[scene].background
  )})`;

  // const [lastEvent, setLastEvent] = useState();
  // useEffect(() => {
  //   let toRead = lastEvent ? interpret(lastEvent, products) : false;
  //   if (toRead) {
  //     setLine(toRead);
  //   }
  // }, [lastEvent]);

  /* Adds data fields to each product in inventory */
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

  /* Changes section of grocery store on display */
  function select(e) {
    let selected = e.target.id;
    setActiveSection(selected);
  }

  /* 
  Keeps the cart and products states in sync. 
  Called whenever the user modifies an item's count
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

  function narrate(e) {
    let toRead = interpret(e, cart, products);
    // console.log(toRead);
    if (toRead) {
      setLine(toRead);
    }
  }

  return (
    <div
      className="viewer"
      style={{ backgroundImage: background }}
      // onClick={(e) => {
      //   setLastEvent(e);
      // }}
      onClick={narrate}
    >
      <div className="virtual-store">
        <StoreNav
          allSections={Object.keys(inventory)}
          selected={activeSection}
          handleClick={select}
        />
        <Outlet context={[activeSection, products, updateCount, cart]} />
        <CartIcon data={cart} />
      </div>
      <NarrationBar text={line} mode={scene.mode}></NarrationBar>
    </div>
  );
}
