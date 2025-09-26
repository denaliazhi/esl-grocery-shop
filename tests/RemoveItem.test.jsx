import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RemoveItem from "../src/components/RemoveItem";

describe("Remove item", () => {
  test("renders expected content", () => {
    render(<RemoveItem handleClick={() => {}} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  test("calls handleClick when clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<RemoveItem handleClick={handleClick} />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toBeCalled();
  });
});
