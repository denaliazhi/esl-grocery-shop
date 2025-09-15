export default function Shelf({ display }) {
  return (
    <>
      {/* TO DO: Add key to each div */}
      {display.map((item) => (
        <div className="item-card">
          <img src={`/${item.name}.png`} alt="Blah blah" width="100" />
          <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
          <p>
            ${item.unitPrice.toFixed(2)} / {item.unitShort}
          </p>
        </div>
      ))}
    </>
  );
}
