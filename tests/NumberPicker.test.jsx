import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NumberPicker from "../src/components/NumberPicker";

describe("Number picker", () => {
  test("renders expected content", () => {
    render(<NumberPicker value={123} handleClick={() => {}} />);
    const buttons = screen.getAllByRole("button");
    const number = screen.getByText("123");

    expect(buttons).toHaveLength(2);
    expect(number).toBeInTheDocument();
  });
  test("calls handleClick with args when '-' is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<NumberPicker value={0} handleClick={handleClick} />);
    const decrementButton = screen.getByRole("button", { name: "Subtract 1" });
    await user.click(decrementButton);

    expect(handleClick).toHaveBeenCalledWith(expect.any(Object), -1);
  });
  test("calls handleClick with args when '+' is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<NumberPicker value={0} handleClick={handleClick} />);
    const incrementButton = screen.getByRole("button", { name: "Add 1" });
    await user.click(incrementButton);

    expect(handleClick).toHaveBeenCalledWith(expect.any(Object), 1);
  });
});
