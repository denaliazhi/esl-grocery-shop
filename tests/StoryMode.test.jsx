import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import StoryMode from "../src/components/StoryMode";

vi.mock("../src/components/NarrationBar", () => ({
  default: vi.fn(({ text, isClickable, handleClick }) => <div>{text}</div>),
}));

describe("Story mode", () => {
  let viewer;
  const script = ["I'm a teapot."];

  beforeEach(() => {
    render(
      <MemoryRouter>
        <StoryMode
          setting="storefront"
          script={script}
          next=""
          transcribe={() => {}}
        />
      </MemoryRouter>
    );
    viewer = screen.getByRole("main");
    screen.debug();
  });

  test("component has 'viewer' class", () => {
    expect(viewer).toHaveClass("viewer");
  });

  test("renders setting as background image", () => {
    expect(viewer).toHaveStyle(
      "backgroundImage: url('backgrounds/storefront.png')"
    );
  });

  test("renders Narration Bar with expected text from script", () => {
    const text = screen.getByText(script[0]);
    expect(text).toBeInTheDocument();
  });
});
