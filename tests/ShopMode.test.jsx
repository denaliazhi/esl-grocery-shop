import { describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";

import { overviews } from "../src/data/shop-narration";
import ShopMode from "../src/components/ShopMode";

vi.mock("../src/components/Shelf", () => ({
  default: vi.fn(() => <section>I'm a shelf.</section>),
}));

const testCases = ["lobby", "checkout", "produce"];

describe.each(testCases)("Shop mode", (route) => {
  let viewer;

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[`/${route}`]}>
        <ShopMode transcribe={() => {}}>
          <Outlet />
        </ShopMode>
      </MemoryRouter>
    );
    viewer = screen.getByRole("main");
  });

  test(`route = '${route}': component has 'viewer' class`, () => {
    expect(viewer).toHaveClass("viewer");
  });

  test(`route = '${route}': renders current route as background image`, () => {
    expect(viewer).toHaveStyle(
      `backgroundImage: url('backgrounds/${route}.png')`
    );
  });

  test(`route = '${route}': renders Narration Bar`, () => {
    const bar = screen.getByText(overviews[route]);
    expect(bar).toBeInTheDocument();
  });

  test(`route = '${route}': ${
    route === "checkout" ? "doesn't render" : "renders"
  } ShopNav`, () => {
    const nav = screen.queryByRole("navigation");
    route !== "checkout"
      ? expect(nav).toBeInTheDocument()
      : expect(nav).toBeNull();
  });

  test.skip(`route = '${route}': ${
    route === "lobby" ? "doesn't render" : "renders"
  } Shelf`, () => {
    // To DO: current test set up doesn't work with outlet
    const shelf = screen.queryByRole("section");
    screen.debug();
    route !== "lobby"
      ? expect(shelf).toBeInTheDocument()
      : expect(shelf).toBeNull();
  });

  test(`route = '${route}': ${
    route === "checkout" ? "doesn't render" : "renders"
  } CartIcon`, () => {
    const icon = screen.queryByRole("button", { name: /View/ });
    route !== "checkout"
      ? expect(icon).toBeInTheDocument()
      : expect(icon).toBeNull();
  });

  test(`route = '${route}': ${
    route === "checkout"
      ? "doesn't render Cart"
      : "renders Cart if CartIcon is clicked"
  }`, async () => {
    const user = userEvent.setup();
    const icon = screen.queryByRole("button", { name: /View/ });

    await user.click(icon);
    const cart = screen.queryByText(/Cart/);

    route !== "checkout"
      ? expect(cart).toBeInTheDocument()
      : expect(cart).toBeNull();
  });
});
