import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

it("3 Progress bar items in the document", () => {
  render(<App />);
  const progressBarElements = screen.queryAllByTestId("test-progress-bar");
  expect(progressBarElements).toHaveLength(3);
});

it("drop down menu has 3 items", () => {
  render(<App />);
  const optionsForSelectElement = screen.queryAllByRole("option");
  expect(optionsForSelectElement).toHaveLength(3);
});

it("4 buttons exist in the document", () => {
  render(<App />);
  const buttonElements = screen.queryAllByRole("button");
  expect(buttonElements).toHaveLength(4);
});

it("+10 button clicks for simulating the progress bar change", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress2", index: 1 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("50%");

  const button10Element = screen.getByText("+10");
  fireEvent.click(button10Element);
  await waitFor(() => {
    expect(progressBarcompletion).toHaveTextContent("60%");
  });
});

it("+25 button clicks for simulating the progress bar change", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress2", index: 1 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("50%");

  const button25Element = screen.getByText("+25");
  fireEvent.click(button25Element);
  await waitFor(() => {
    expect(progressBarcompletion).toHaveTextContent("75%");
  });
});

it("-25 button clicks for simulating the progress bar change", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress2", index: 1 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("50%");

  const buttonNeg25Element = screen.getByText("-25");
  fireEvent.click(buttonNeg25Element);
  await waitFor(() => {
    expect(progressBarcompletion).toHaveTextContent("25%");
  });
});

it("-10 button clicks for simulating the progress bar change", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress2", index: 1 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("50%");

  const buttonNeg10Element = screen.getByText("-10");
  fireEvent.click(buttonNeg10Element);
  await waitFor(() => {
    expect(progressBarcompletion).toHaveTextContent("40%");
  });
});

it("-25 button clicks several times and progress bar doesn't reach below 0", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress2", index: 1 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  const progressbarcolor = screen.queryByTestId(
    `test-progress-bar-color${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("50%");

  const buttonNeg25Element = screen.getByText("-25");
  fireEvent.click(buttonNeg25Element);
  fireEvent.click(buttonNeg25Element);
  fireEvent.click(buttonNeg25Element);
  await waitFor(() => {
    expect(progressBarcompletion).toHaveTextContent("0%");
    expect(progressbarcolor).toHaveAttribute("class", "progress-bar bg-info");
  });
});

it("+25 button clicks several times and progress bar reach to respective percentage over 100", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress3", index: 2 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("75%");

  const button25Element = screen.getByText("+25");
  fireEvent.click(button25Element);
  fireEvent.click(button25Element);
  fireEvent.click(button25Element);
  await waitFor(() => {
    expect(progressBarcompletion).toHaveTextContent("150%");
  });
});

it("Progress bar color remains same when it is less than 100", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress2", index: 1 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  const progressbarcolor = screen.queryByTestId(
    `test-progress-bar-color${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("50%");

  const buttonNeg25Element = screen.getByText("-25");
  fireEvent.click(buttonNeg25Element);
  await waitFor(() => {
    expect(progressbarcolor).toHaveAttribute("class", "progress-bar bg-info");
  });
});

it("+25 button clicks several times. Progress bar reach to respective percentage over 100 and color changes for the bar", async () => {
  render(<App />);
  const progressbarItem = { name: "#progress3", index: 2 };
  const progressDropdown = screen.queryByTestId("progress-dropdown");
  fireEvent.change(progressDropdown, {
    target: { value: progressbarItem.index },
  });
  const progressBarcompletion = screen.queryByTestId(
    `test-progress-bar${progressbarItem.name}`
  );
  const progressbarcolor = screen.queryByTestId(
    `test-progress-bar-color${progressbarItem.name}`
  );
  expect(progressBarcompletion).toHaveTextContent("75%");

  const button25Element = screen.getByText("+25");
  fireEvent.click(button25Element);
  fireEvent.click(button25Element);
  fireEvent.click(button25Element);
  await waitFor(() => {
    expect(progressbarcolor).toHaveAttribute("class", "progress-bar bg-danger");
  });
});
