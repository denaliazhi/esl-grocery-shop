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

export default function ShoppingMode({ scene, setScene }) {
  const [activeSection, setActiveSection] = useState("");
  const [products, setProducts] = useState(modify(inventory));

  let cart = getCartContents();

  function getCartContents() {
    let contents = {
      items: [],
      count: 0,
      totalCost: 0,
    };
    for (let section of Object.keys(products)) {
      products[section].forEach((item) => {
        if (item.count > 0) {
          item.totalCost = item.count * item.unitPrice;
          contents.items.push(item);
          contents.count = contents.count + item.count;
          contents.totalCost = contents.totalCost + item.totalCost;
        }
      });
    }
    return contents;
  }

  const [line, setLine] = useState(main[scene].script[0]);

  let background = `url(backgrounds${getImagePath(
    activeSection !== "" ? activeSection : main[scene].background
  )})`;

  /* Determines narration to show on render */
  const [lastEvent, setLastEvent] = useState();
  useEffect(() => {
    let toRead = lastEvent ? interpret(lastEvent, cart, products) : false;
    if (toRead) {
      setLine(toRead);
    }
  }, [lastEvent]);

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
    // Trigger narration of this change
    setLastEvent({ target: "nav-bar", section: selected });
  }

  /* 
  Called whenever the user modifies an item's count
  by `num` where `num` is 1, -1, or -[item.count].
  */
  function updateCount(e, num) {
    const clicked = e.target.closest(".product");
    const section = clicked.dataset.section;

    const updatedSection = products[section].map((item) => {
      if (item.id === clicked.id) {
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
    // Trigger narration of this change
    setLastEvent({ target: "product", section: section, id: clicked.id });
  }

  function handleCheckout() {
    setActiveSection("parking lot");
    setLastEvent({ target: "post-checkout" });
  }

  return (
    <div className="viewer" style={{ backgroundImage: background }}>
      <div className="virtual-store">
        {activeSection !== "parking lot" && (
          <StoreNav
            allSections={Object.keys(inventory)}
            selected={activeSection}
            handleClick={select}
          />
        )}
        <Outlet
          context={[
            activeSection,
            products,
            updateCount,
            cart,
            setScene,
            setLastEvent,
            handleCheckout,
          ]}
        />
        {activeSection !== "parking lot" && (
          <CartIcon
            data={cart}
            handleClick={() => setLastEvent({ target: "cart" })}
          />
        )}
      </div>
      <NarrationBar text={line} mode={scene.mode}></NarrationBar>
    </div>
  );
}
