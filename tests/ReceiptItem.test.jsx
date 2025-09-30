import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ReceiptItem from "../src/components/ReceiptItem";
import userEvent from "@testing-library/user-event";

describe("Receipt item", () => {
  test("renders expected content", () => {
    const item = {
      id: "x123",
      name: "apple",
      unitPrice: 1.23,
      displayUnit: "each",
      section: "produce",
      count: 1,
      totalCost: 1.23,
    };
    const { container } = render(
      <ReceiptItem item={item} handleMouse={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  test("on hover, calls handleMouse", async () => {
    const user = userEvent.setup();
    const handleMouse = vi.fn();
    const item = {
      id: "x123",
      name: "apple",
      unitPrice: 1.23,
      displayUnit: "each",
      section: "produce",
      count: 1,
      totalCost: 1.23,
    };
    render(<ReceiptItem item={item} handleMouse={handleMouse} />);
    const renderedItem = screen.getByRole("listitem");
    await user.hover(renderedItem);

    expect(handleMouse).toHaveBeenCalledOnce();
  });
});
