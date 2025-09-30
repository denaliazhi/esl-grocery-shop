import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../src/App";

const testCases = ["/", "/lobby", "/end"];

describe.each(testCases)("App", (route) => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    console.log(route);
  });

  test(`route = '${route}': renders header`, () => {
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  test(`route = '${route}': renders footer`, () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  test(`route = '${route}': renders lesson title`, () => {
    const heading = screen.getByRole("heading", { name: /Grocery/ });
    expect(heading).toBeInTheDocument();
  });

  test(`route = '${route}': renders Help Dialog`, () => {
    const help = screen.getByRole("dialog");
    expect(help).toBeInTheDocument();
  });

  test(`route = '${route}': renders ${
    route === "/" || route === "/end" ? "Story Mode" : "Shop Mode"
  }`, () => {
    const mode =
      route === "/" || route === "/end"
        ? screen.getByRole("button", { name: /Next/ })
        : screen.getByRole("navigation", { name: /Shop/ });
    expect(mode).toBeInTheDocument();
  });

  test(`route = '${route}': renders Lesson Guide`, () => {
    const guide = screen.getByRole("navigation", { name: /Lesson guide/ });
    expect(guide).toBeInTheDocument();
  });
});
