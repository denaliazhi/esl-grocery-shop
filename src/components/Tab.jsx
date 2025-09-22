export default function Tab({ isFirst, contents }) {
  function format(text) {
    let list = text.split("-");
    return (
      <>
        <p>{list[0]}</p>
        {list.length > 1 && (
          <ul>
            {list.slice(1).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <div
      className="tab-contents"
      style={isFirst ? { borderTopLeftRadius: 0 } : null}
    >
      {contents.map((section) => (
        <div key={section.heading} className="tab-section">
          <h3>{section.heading}</h3>
          {format(section.content)}
        </div>
      ))}
    </div>
  );
}
