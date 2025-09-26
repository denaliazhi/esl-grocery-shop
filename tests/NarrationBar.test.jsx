import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NarrationBar from "../src/components/NarrationBar";

describe("Narration bar", () => {
  test("renders the text passed to it", () => {
    render(
      <NarrationBar
        text="I'm at Green Goods"
        isClickable={false}
        handleClick={() => {}}
      />
    );
    const text = screen.getByText("I'm at Green Goods");

    expect(text).toBeInTheDocument();
  });

  test("renders the 'Next' button if it's enabled", () => {
    render(
      <NarrationBar
        text="Blah blah"
        isClickable={true}
        handleClick={() => {}}
      />
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch("Next");
  });

  test("doesn't render the 'Next' button if it's disabled", () => {
    render(
      <NarrationBar
        text="Blah blah"
        isClickable={false}
        handleClick={() => {}}
      />
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("calls handleClick when 'Next' is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <NarrationBar
        text="Blah blah"
        isClickable={true}
        handleClick={handleClick}
      />
    );
    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test("doesn't call handleClick when 'Next' isn't clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <NarrationBar
        text="Blah blah"
        isClickable={true}
        handleClick={handleClick}
      />
    );
    const bar = screen.getByRole("log");
    await user.click(bar);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
