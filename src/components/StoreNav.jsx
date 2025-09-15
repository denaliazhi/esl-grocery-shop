export default function StoreNav({ allSections, selected, onClick }) {
  return (
    <div className="store-nav">
      {allSections.map((section) => {
        return (
          <button
            id={section}
            className={section === selected && "selected"}
            onClick={(e) => onClick(e)}
          >
            {section}
          </button>
        );
      })}
    </div>
  );
}
