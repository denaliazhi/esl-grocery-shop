import { vi, describe, test, expect } from "vitest";
import { render } from "@testing-library/react";

import CartItem from "../src/components/CartItem";

vi.mock("../src/components/NumberPicker", () => ({
  default: vi.fn(({ value, handleClick }) => <button>beep</button>),
}));

vi.mock("../src/components/RemoveItem", () => ({
  default: vi.fn(({ value, handleClick }) => <button>boop</button>),
}));

describe("Cart item", () => {
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
      <CartItem item={item} handleClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });
});
