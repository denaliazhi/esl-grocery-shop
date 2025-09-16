export default function Cart({ contents }) {
  let totalItems = 0;
  for (let section of Object.keys(contents)) {
    for (let item of contents[section]) {
      totalItems = totalItems + item.count;
    }
  }
  return (
    <>
      <button className="cart-btn">{totalItems}</button>
    </>
  );
}
