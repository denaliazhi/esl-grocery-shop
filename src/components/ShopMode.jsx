/**
 * This component simulates the process
 * of online grocery shopping.
 */
import { getImagePath } from "../utils.js";
import interpret from "../data/shop-narration.js";
import inventory from "../data/inventory.js";
import ShopNav from "./ShopNav.jsx";
import CartIcon from "./CartIcon.jsx";
import Cart from "./Cart.jsx";
import NarrationBar from "./NarrationBar.jsx";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function ShopMode() {
  const [animate, setAnimate] = useState({ cart: "highlight" });

  const grocerySection = useLocation().pathname.slice(1);
  const path = getImagePath("backgrounds", grocerySection);

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

  const [showCart, setShowCart] = useState(false);

  const [line, setLine] = useState("Where will I go first?");

  /* Determines narration to show on render */
  const [lastEvent, setLastEvent] = useState();

  useEffect(() => {
    let toRead = lastEvent
      ? interpret(lastEvent, grocerySection, cart, products)
      : false;
    toRead && setLine(toRead);
  }, [lastEvent]);

  useEffect(() => {
    let toRead = interpret({ target: "nav-bar" }, grocerySection);
    toRead && setLine(toRead);
  }, [grocerySection]);

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

    // Trigger button animation
    if (num === 1) {
      setAnimate({ ...animate, cart: "stretch" });
      setTimeout(() => setAnimate({ ...animate, cart: false }), 300);
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
    if (animate.cart === "highlight") {
      setAnimate({ ...animate, cart: false });
    }
    setShowCart(!showCart);
  }

  const navigate = useNavigate();
  return (
    <div className="viewer" style={{ backgroundImage: `url(${path})` }}>
      <div className="virtual-store">
        {grocerySection !== "checkout" && (
          <ShopNav
            allSections={Object.keys(inventory)}
            selected={grocerySection}
          />
        )}
        {showCart ? (
          <Cart
            updateCount={updateCount}
            cart={cart}
            toggleCart={setShowCart}
            read={setLastEvent}
            handleCheckout={handleCheckout}
          />
        ) : (
          grocerySection !== "lobby" && (
            <Outlet
              context={{
                grocerySection,
                products,
                cart,
                updateCount,
                setLastEvent,
              }}
            />
          )
        )}
        {grocerySection !== "checkout" && (
          <CartIcon
            data={cart}
            handleClick={handleCartClick}
            read={() => setLastEvent({ target: "cart" })}
            animate={animate.cart}
          />
        )}
      </div>
      <NarrationBar
        text={line}
        enableNext={grocerySection === "checkout"}
        handleClick={() => {
          navigate("/end");
        }}
      ></NarrationBar>
    </div>
  );
}
