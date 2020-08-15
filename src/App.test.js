import React from "react";
import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";

import App from "./App";

setupServer(
  rest.get("https://www.example.com", (req, res, ctx) => {
    return res(ctx.json({}));
  })
);

describe("App", () => {
  test("render", async () => {
    const { findByText } = render(<App />);
    await findByText(/loaded/i);
  });
});
