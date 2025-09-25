/**
 * This component provides directions at the start
 * of the lesson. It's a dialog box that can be closed
 * or re-opened at any time.
 */

export default function HelpDialog({
  isOpen,
  handleClick,
  closeText,
  children,
}) {
  return (
    <>
      {isOpen ? (
        // Wrapper div to dim/blur content behind dialog box
        <div className="dialog-overlay">
          <dialog open>
            {children}
            {/* Button to close dialog box */}
            <button onClick={handleClick}>{closeText}</button>
          </dialog>
        </div>
      ) : (
        // Button to open dialog box
        <div>
          <button className="help-btn" onClick={handleClick}>
            Help
          </button>
        </div>
      )}
    </>
  );
}
