import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HelpDialog from "../src/components/HelpDialog";

describe("Help dialog", () => {
  test("when open, renders expected contents", () => {
    const instructions = "Follow these instructions";

    render(<HelpDialog closeText="Close">{instructions}</HelpDialog>);
    const dialog = screen.getByRole("dialog");

    expect(dialog).toBeInTheDocument();
    expect(dialog.textContent).toMatch(instructions);
  });

  test("when open, renders 'Close' not 'Help' button", () => {
    render(<HelpDialog closeText="Close">"Blah"</HelpDialog>);
    const closeButton = screen.getAllByRole("button");

    expect(closeButton).toHaveLength(1);
    expect(closeButton[0].textContent).toMatch("Close");
  });
});

describe("Help dialog | Interactions", () => {
  let user, closeButton;

  beforeEach(() => {
    user = userEvent.setup();
    render(<HelpDialog closeText="Close">"Blah"</HelpDialog>);
    closeButton = screen.getByRole("button");
  });

  test("clicking 'Close' button closes dialog", async () => {
    const dialog = screen.getByRole("dialog");
    await user.click(closeButton);

    expect(dialog).not.toBeInTheDocument();
  });

  test("when closed, renders 'Help' not 'Close' button", async () => {
    await user.click(closeButton);
    const helpButton = screen.getAllByRole("button");

    expect(helpButton).toHaveLength(1);
    expect(helpButton[0].textContent).toMatch("Help");
  });

  test("clicking 'Help' button opens dialog", async () => {
    await user.click(closeButton);
    const helpButton = screen.getByRole("button");
    await user.click(helpButton);
    const dialog = screen.getByRole("dialog");

    expect(dialog).toBeInTheDocument();
  });
});
