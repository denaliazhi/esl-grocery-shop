/**
 * This component provides directions at the start
 * of the lesson. It's a dialog box that can be closed
 * or re-opened at any time.
 */
import { useState } from "react";

export default function HelpDialog({ closeText, children }) {
  const [showDialog, setShowDialog] = useState(true);

  function handleClick() {
    setShowDialog(!showDialog);
  }

  return (
    <>
      {showDialog ? (
        // Wrapper div to dim/blur content behind dialog box
        <div className="dialog-overlay">
          <dialog open>
            {children}
            <button className="close-help-btn" onClick={handleClick}>
              {closeText}
            </button>
          </dialog>
        </div>
      ) : (
        // Button to open dialog box
        <div>
          <button className="show-help-btn" onClick={handleClick}>
            Help
          </button>
        </div>
      )}
    </>
  );
}
