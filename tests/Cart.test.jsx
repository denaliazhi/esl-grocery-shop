import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

import Cart from "../src/components/Cart";

vi.mock("../src/components/CartItem", () => ({
  default: vi.fn(({ item, handleClick }) => <div>I'm an item</div>),
}));

const testCases = [
  {
    input: {
      count: 1,
      items: [{ id: "xyz", name: "apple" }],
      totalCost: 1.230899,
    },
    output: { count: "(1 item)", totalCost: "$1.23" },
  },
  {
    input: {
      count: 2,
      items: [
        { id: "xyz", name: "apple" },
        { id: "abc", name: "banana" },
      ],
      totalCost: 2.34983,
    },
    output: { count: "(2 items)", totalCost: "$2.35" },
  },
];

describe.each(testCases)("Cart with n items", ({ input, output }) => {
  let handleClose, handleMouse, updateCount;

  beforeEach(() => {
    handleClose = vi.fn();
    handleMouse = vi.fn();
    updateCount = vi.fn();

    render(
      <MemoryRouter>
        <Cart
          cart={input}
          handleClose={handleClose}
          handleMouse={handleMouse}
          updateCount={updateCount}
        />
      </MemoryRouter>
    );
  });

  test(`n = ${input.count}: describes item count using correct grammar`, () => {
    const cartCount = screen.getByText(output.count);
    expect(cartCount).toBeInTheDocument();
  });

  test(`n = ${input.count}: renders link to '/checkout'`, () => {
    const checkoutLink = screen.getByRole("link", { name: "Checkout" });

    expect(checkoutLink).toBeDefined();
    expect(checkoutLink.getAttribute("href")).toBe("/checkout");
  });

  test(`n = ${input.count}: calls handleMouse when user hovers over checkout link`, async () => {
    const user = userEvent.setup();

    const checkoutLink = screen.getByRole("link", { name: "Checkout" });
    await user.hover(checkoutLink);

    expect(handleMouse).toHaveBeenCalledWith({ target: "pre-checkout" });
  });

  test(`n = ${input.count}: renders n items in cart`, () => {
    expect(screen.getAllByText("I'm an item")).toHaveLength(input.count);
  });

  test(`n = ${input.count}: renders total cost of items in cart`, () => {
    expect(screen.getByText(output.totalCost)).toBeInTheDocument();
  });
});

describe("Cart with 0 items", () => {
  let handleMouse, checkoutButton;

  beforeEach(() => {
    handleMouse = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={{
            count: 0,
            items: [],
            totalCost: 0,
          }}
          handleClose={() => {}}
          handleMouse={handleMouse}
          updateCount={() => {}}
        />
      </MemoryRouter>
    );
    checkoutButton = screen.getByRole("button", { name: "Checkout" });
  });

  test("renders disabled checkout button", () => {
    expect(checkoutButton).toBeInTheDocument();
    expect(checkoutButton).toHaveClass("disabled");
  });

  test("calls handleMouse when user hovers over disabled checkout button", async () => {
    const user = userEvent.setup();
    await user.hover(checkoutButton);

    expect(handleMouse).toHaveBeenCalledWith({ target: "no-checkout" });
  });

  test("renders empty cart with message", () => {
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });
});

describe("Cart", () => {
  let handleClose, backButton;

  beforeEach(() => {
    handleClose = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={{
            count: 1,
            items: [{ id: "xyz", name: "apple" }],
            totalCost: 1.230899,
          }}
          handleClose={handleClose}
          handleMouse={() => {}}
          updateCount={() => {}}
        />
      </MemoryRouter>
    );
    backButton = screen.getByRole("button", {
      name: /Back/,
    });
  });

  test("renders back button", () => {
    expect(backButton).toBeInTheDocument();
  });

  test("back button calls handleClose on click", async () => {
    const user = userEvent.setup();
    await user.click(backButton);

    expect(handleClose).toHaveBeenCalled();
  });
});
