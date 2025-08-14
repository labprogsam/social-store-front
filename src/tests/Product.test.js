import { render, screen } from "@testing-library/react";
import Product from "../views/Product"; // caminho ajustado para a pasta views

describe("Product component", () => {
  test("deve renderizar o texto 'Product'", () => {
    render(<Product />);
    const productText = screen.getByText(/Product/i);
    expect(productText).toBeInTheDocument();
  });
});