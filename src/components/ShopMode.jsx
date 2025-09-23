/**
 * This component simulates the process
 * of shopping in a grocery store.
 */
import { Outlet, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import { getImagePath } from "../utils.js";
import interpret from "../data/shop-narration.js";
import inventory from "../data/inventory.js";

import ShopNav from "./ShopNav.jsx";
import Cart from "./Cart.jsx";
import CartIcon from "./CartIcon.jsx";
import NarrationBar from "./NarrationBar.jsx";

export default function ShopMode() {
  const navigate = useNavigate();

  const grocerySection = useLocation().pathname.slice(1);
  const imagePath = getImagePath("backgrounds", grocerySection);

  const [allProducts, setAllProducts] = useState(modify(inventory));
  /* 
  Adds data fields to each product from inventory
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

  // Store content of narration bar
  const [line, setLine] = useState("Where will I go first?");

  // Store last narration-triggering event
  const [lastEvent, setLastEvent] = useState();

  // Conditionally animate these components
  const [animate, setAnimate] = useState({
    cart: "highlight",
    nav: "highlight",
  });
  const [showCart, setShowCart] = useState(false);

  // Derive user's cart contents from the state of all products
  let cart = getCartContents();
  function getCartContents() {
    let contents = {
      items: [],
      count: 0,
      totalCost: 0,
    };
    for (let section of Object.keys(allProducts)) {
      allProducts[section].forEach((item) => {
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

  /* 
  If a narration-triggering event has occurred, 
  determine line to show in narration bar 
  */
  useEffect(() => {
    let toRead = interpret(lastEvent, grocerySection, cart, allProducts);
    toRead && setLine(toRead);
  }, [lastEvent]);

  /* 
  If user has navigated to a different grocery section,
  determine line to show in narration bar 
  */
  useEffect(() => {
    let toRead = interpret({ target: "nav-bar" }, grocerySection);
    toRead && setLine(toRead);

    // Stop highlighting nav bar
    if (grocerySection !== "lobby") {
      setAnimate({ ...animate, nav: false });
    }
  }, [grocerySection]);

  /* 
  Called when user modifies an item's count by `num` 
  where `num` is 1, -1, or -item.count.
  */
  function updateCount(e, num) {
    const clicked = e.target.closest(".product");
    const section = clicked.dataset.section;

    // Update item's count within its grocery section
    const updatedSection = allProducts[section].map((item) => {
      return item.id === clicked.id
        ? { ...item, count: item.count + num }
        : item;
    });
    setAllProducts({
      ...allProducts,
      [section]: updatedSection,
    });

    // Trigger narration of this change
    setLastEvent({ target: "product", section: section, id: clicked.id });

    // Trigger button animation
    animateCart(num === 1);
  }

  function animateCart(isAddItem) {
    // Item being added to cart
    if (isAddItem) {
      setAnimate({ ...animate, cart: "stretch" });
      setTimeout(() => setAnimate({ ...animate, cart: false }), 300);
      // Item(s) being removed from cart
    } else {
      setAnimate({ ...animate, cart: "squeeze" });
      setTimeout(() => setAnimate({ ...animate, cart: false }), 300);
    }
  }

  function handleCheckout() {
    setShowCart(false);
    setLastEvent({ target: "post-checkout" });
  }

  function handleCartClick() {
    // Stop highlighting cart after first click
    if (animate.cart === "highlight") {
      setAnimate({ ...animate, cart: false });
    }
    setShowCart(!showCart);
    setLastEvent({ target: "cart" });
  }

  return (
    <div className="viewer" style={{ backgroundImage: `url(${imagePath})` }}>
      <div className="virtual-store">
        {grocerySection !== "checkout" && (
          <ShopNav
            options={Object.keys(inventory)}
            selected={grocerySection}
            animate={animate.nav}
          />
        )}
        {showCart ? (
          <Cart
            cart={cart}
            handleClose={() => setShowCart(false)}
            handleCheckout={handleCheckout}
            handleMouse={setLastEvent}
            updateCount={updateCount}
          />
        ) : (
          grocerySection !== "lobby" && (
            <Outlet
              context={{
                grocerySection,
                allProducts,
                cart,
                updateCount,
                setLastEvent,
              }}
            />
          )
        )}
        {grocerySection !== "checkout" && (
          <CartIcon
            cart={cart}
            handleClick={handleCartClick}
            handleMouse={setLastEvent}
            animate={animate.cart}
          />
        )}
      </div>
      <NarrationBar
        text={line}
        isClickable={grocerySection === "checkout"}
        handleClick={() => {
          navigate("/end");
        }}
      ></NarrationBar>
    </div>
  );
}
