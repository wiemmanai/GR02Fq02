import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("affiche le titre et le message initial", () => {
  render(<App />);
  expect(screen.getByText(/Débuter avec React/i)).toBeInTheDocument();
  expect(
    screen.getByText("Bonne découverte des composants React")
  ).toBeInTheDocument();
});

test("le clic sur Aimer change le message (challenge)", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /Aimer/i }));
  expect(screen.getByText("Premier défi réussi")).toBeInTheDocument();
});
