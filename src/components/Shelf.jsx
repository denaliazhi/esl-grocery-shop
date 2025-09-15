import { useOutletContext } from "react-router";

export default function Shelf() {
  const [section, items] = useOutletContext();
  console.log(items);
  return (
    <>
      {section ? (
        <div className="item-shelf">
          {items[section].map((item) => (
            <div className="item-card" key={item.id} id={item.id}>
              <img src={`/${item.name}.png`} alt="Blah blah" width="100" />
              <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
              <p>
                ${item.unitPrice.toFixed(2)} / {item.displayUnit}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
