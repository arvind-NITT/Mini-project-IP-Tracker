import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import React from "react";
import "@testing-library/jest-dom";
import { useIpContext } from "./components/IpContext";
import { SearchBar } from "./components/SearchBar";

jest.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => <div>{children}</div>,
  Marker: () => <div>Marker</div>,
  TileLayer: () => <div>TileLayer</div>,
}));
jest.mock("./components/APICalls.js", () => {
  return {
    fetchLocationData: jest.fn(),
  };
});

jest.mock("./components/IpContext", () => ({
  IpProvider: ({ children }) => <div>{children}</div>,
  useIpContext: jest.fn().mockImplementation(() => {
    return {
      fetchLocation: jest.fn(),
      coordinates: jest.fn(),
    };
  }),
}));

jest.mock("./", () => ({
  useIpContext: jest.fn(),
}));

test("First Test case - Check IP Address is rendered", () => {
  render(<App />);

  const ipElement = screen.getByText("IP Address");

  expect(5).toBe(5);
  expect(ipElement).toBeInTheDocument();
});

test("Check IP Address component is in the Document", () => {
  render(<App />);

  const ipElement = screen.getByTestId("ip-address");

  expect(ipElement).toBeInTheDocument();
});

describe("SearchBar Component", () => {
  it("should call setIpAddress and fetchLocation with the correct IP address when handleSearch is clicked", () => {
    const setIpAddressMock = jest.fn();
    const fetchLocationMock = jest.fn();

    useIpContext.mockReturnValue({
      setipAddress: setIpAddressMock,
      fetchLocation: fetchLocationMock,
    });

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText(
      "Enter the IP Address here..."
    );

    fireEvent.change(inputElement, { target: { value: "192.168.1.1" } });

    const searchButton = screen.getByAltText("Arrow-icon");

    fireEvent.click(searchButton);

    expect(setIpAddressMock).toHaveBeenCalledWith("192.168.1.1");

    expect(fetchLocationMock).toHaveBeenCalledWith("192.168.1.1");
  });

  it('should alert "Invalid IP Address" when an invalid IP is entered', () => {
    window.alert = jest.fn();

    const setIpAddressMock = jest.fn();
    const fetchLocationMock = jest.fn();

    useIpContext.mockReturnValue({
      setipAddress: setIpAddressMock,
      fetchLocation: fetchLocationMock,
    });

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText(
      "Enter the IP Address here..."
    );

    fireEvent.change(inputElement, { target: { value: "999.999.999.999" } });

    const searchButton = screen.getByAltText("Arrow-icon");

    fireEvent.click(searchButton);

    expect(window.alert).toHaveBeenCalledWith("Invalid IP Address");
  });
});
