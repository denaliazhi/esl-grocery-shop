import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ShelfItem from "../src/components/ShelfItem";

vi.mock("../src/components/NumberPicker", () => ({
  default: vi.fn(() => <button>Edit</button>),
}));

vi.mock("../src/components/AddItem", () => ({
  default: vi.fn(() => <button>Add</button>),
}));

describe("Shelf item", () => {
  test("renders expected content", () => {
    const item = {
      id: "x123",
      name: "apple",
      unitPrice: 1.23,
      displayUnit: "each",
      section: "produce",
      count: 1,
    };
    const { container } = render(
      <ShelfItem item={item} handleClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  test("renders 'Add to cart' button when item count = 0'", async () => {
    const item = {
      id: "x246",
      name: "banana",
      unitPrice: 2.46,
      displayUnit: "each",
      section: "produce",
      count: 0,
    };
    render(<ShelfItem item={item} handleClick={() => {}} />);
    const addButton = screen.getByRole("button", { name: /Add/ });
    expect(addButton).toBeInTheDocument();
  });

  test("renders 'Edit' button when item count > 0'", async () => {
    const item = {
      id: "x137",
      name: "orange",
      unitPrice: 1.37,
      displayUnit: "each",
      section: "produce",
      count: 9,
    };
    render(<ShelfItem item={item} handleClick={() => {}} />);
    const editButton = screen.getByRole("button", { name: /Edit/ });
    expect(editButton).toBeInTheDocument();
  });
});
