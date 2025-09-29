import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import ShopNav from "../src/components/ShopNav";

const testCases = [
  {
    options: ["Bakery", "Dairy", "Produce"],
    selected: "Bakery",
    animate: false,
  },
  {
    options: ["Bakery", "Dairy", "Produce"],
    selected: "Produce",
    animate: "highlight",
  },
  {
    options: ["Bakery", "Dairy", "Produce"],
    selected: "",
    animate: "highlight",
  },
  {
    options: ["Bakery", "Dairy", "Produce"],
    selected: "",
    animate: false,
  },
];

describe.each(testCases)("Shop nav", ({ options, selected, animate }) => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ShopNav options={options} selected={selected} animate={animate} />
      </MemoryRouter>
    );
  });

  test.each([options])(
    `renders each option as a link that navigates to the expected route`,
    (option) => {
      const link = screen.getByText(option);
      expect(link).toBeDefined();
      expect(link.getAttribute("href")).toBe(`/${option}`);
    }
  );

  test(`${selected ? selected : "no"} section has 'selected' class`, () => {
    const items = screen.getAllByRole("listitem");
    const selectedItem = items.find((item) => item.textContent === selected);
    selectedItem
      ? expect(selectedItem).toHaveClass("selected")
      : expect(selectedItem).toBeUndefined();
  });

  test(`component ${animate ? "is animated" : "isn't animated"}`, () => {
    const nav = screen.getByRole("list");
    animate
      ? expect(nav).toHaveClass("highlight")
      : expect(nav).not.toHaveClass("highlight");
  });
});
