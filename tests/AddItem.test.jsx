import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddItem from "../src/components/AddItem";

describe("Add item", () => {
  test("renders expected content", () => {
    render(<AddItem handleClick={() => {}} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  test("calls handleClick when clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<AddItem handleClick={handleClick} />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toBeCalled();
  });
});
