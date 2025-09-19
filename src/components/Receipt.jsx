import { useOutletContext } from "react-router";
import CartItem from "./CartItem";

export default function Receipt() {
  // const [, products, , cart, setScene, setLastEvent, handleCheckout] =
  //   useOutletContext();

  const [
    activeSection,
    products,
    updateCount,
    cart,
    ,
    setLastEvent,
    handleCheckout,
  ] = useOutletContext();

  let selectedItems = [];
  for (let section of Object.keys(products)) {
    selectedItems.push(...products[section].filter((item) => item.count > 0));
  }

  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <div>
            <h2>Receipt</h2>
            <p>{`(${cart.count} item${cart.count === 1 ? "" : "s"})`}</p>
          </div>
        </div>
      </div>

      <div className="cart-items">
        {selectedItems.map((item) => (
          <CartItem item={item} key={item.id} handleClick={updateCount} />
        ))}
      </div>
      <hr />
      <div className="cart-total">
        <p>Total</p>
        <p>{cart.totalCost.toFixed(2)}</p>
      </div>
    </>
  );
}
