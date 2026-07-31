import { render } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
