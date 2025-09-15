import NumberPicker from "./NumberPicker";

export default function Product({ item, handleClick }) {
  return (
    <>
      <div className="product" id={item.id}>
        <img src={`/${item.name}.png`} alt="" width="100" />
        <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
        <p>
          ${item.unitPrice.toFixed(2)} / {item.displayUnit}
        </p>
        {item.count === 0 ? (
          <button
            onClick={(e) => {
              handleClick(e.target.parentNode.id, 1);
            }}
          >
            Add to cart
          </button>
        ) : (
          <NumberPicker value={item.count} handleClick={handleClick} />
        )}
      </div>
    </>
  );
}
