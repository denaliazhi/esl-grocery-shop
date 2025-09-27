import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CartIcon from "../src/components/CartIcon";

const cart = { count: 72 };

describe("Cart icon", () => {
  test("renders expected content", () => {
    render(
      <CartIcon
        cart={cart}
        handleClick={() => {}}
        handleMouse={() => {}}
        animate=""
      />
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch(cart.count);
  });

  test("adds 'highlighted' class if animation is 'highlight'", () => {
    render(
      <CartIcon
        cart={cart}
        handleClick={() => {}}
        handleMouse={() => {}}
        animate="highlight"
      />
    );
    const button = screen.getByRole("button");

    expect(button).toHaveClass("highlighted");
  });

  test("styles valid animation, 'stretch'", () => {
    render(
      <CartIcon
        cart={cart}
        handleClick={() => {}}
        handleMouse={() => {}}
        animate="stretch"
      />
    );
    const button = screen.getByRole("button");

    expect(button).toHaveStyle("animationName: stretch");
  });

  test("doesn't style invalid animation, 'poke'", () => {
    render(
      <CartIcon
        cart={cart}
        handleClick={() => {}}
        handleMouse={() => {}}
        animate="poke"
      />
    );
    const button = screen.getByRole("button");

    expect(button).not.toHaveStyle("animationName: poke");
  });
});

describe("Cart icon | Interactions", () => {
  let user, button, handleClick, handleMouse;

  beforeEach(() => {
    handleClick = vi.fn();
    handleMouse = vi.fn();
    user = userEvent.setup();

    render(
      <CartIcon
        cart={cart}
        handleClick={handleClick}
        handleMouse={handleMouse}
        animate=""
      />
    );

    button = screen.getByRole("button");
  });

  test("on click, calls handleMouse and handleClick", async () => {
    await user.click(button);

    expect(handleMouse).toBeCalled();
    expect(handleClick).toBeCalled();
  });

  test("on hover, calls handleMouse but not handleClick", async () => {
    await user.hover(button);

    expect(handleMouse).toBeCalled();
    expect(handleClick).not.toBeCalled();
  });
});
