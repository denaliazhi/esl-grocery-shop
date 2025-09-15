import { Link } from "react-router";

export default function StoreNav({ allSections, selected, onClick }) {
  return (
    <div className="store-nav">
      {allSections.map((section) => {
        return (
          <Link
            to={`/${section}`}
            id={section}
            key={section}
            className={section === selected ? "selected" : null}
            onClick={(e) => onClick(e)}
          >
            {section}
          </Link>
        );
      })}
    </div>
  );
}
