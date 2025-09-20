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
import Cart from "./Cart.jsx";
import NarrationBar from "./NarrationBar";
import { Outlet, useParams } from "react-router";
import { useState, useEffect } from "react";

export default function ShoppingMode({ scene, setScene }) {
  const { grocerySection } = useParams();
  const path = getImagePath(grocerySection ? grocerySection : "parking lot");

  const [products, setProducts] = useState(modify(inventory));

  let cart = getCartContents();
  console.log(cart);
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

  const [line, setLine] = useState(main[scene].script[0]);

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
    setShowCart(false);
    setLastEvent({ target: "post-checkout" });
  }

  return (
    <div
      className="viewer"
      style={{ backgroundImage: `url(backgrounds${path}` }}
    >
      <div className="virtual-store">
        {grocerySection && (
          <StoreNav
            allSections={Object.keys(inventory)}
            selected={grocerySection}
            read={setLastEvent}
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
        {grocerySection && (
          <CartIcon
            data={cart}
            handleClick={setShowCart}
            read={() => setLastEvent({ target: "cart" })}
          />
        )}
      </div>
      <NarrationBar text={line} mode={scene.mode}></NarrationBar>
    </div>
  );
}
