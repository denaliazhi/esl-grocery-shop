import { Link } from "react-router";

export default function StoreNav({ allSections, selected, handleClick }) {
  return (
    <div className="store-nav">
      {allSections.map((section) => {
        return (
          <Link
            to={`/${section}`}
            id={section}
            key={section}
            className={section === selected ? "selected" : null}
            onClick={(e) => handleClick(e)}
          >
            {section}
          </Link>
        );
      })}
    </div>
  );
}
