import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, vi } from "vitest"

import "@testing-library/jest-dom"

import Autocomplete from "./Autocomplete"

const mockDataState = (state: AutocompleteProps["dataState"]) => state

describe("Autocomplete Component", () => {
  test("renders without crashing", () => {
    render(
      <Autocomplete onChangeInputFn={() => {}} inputValue="" dataState={{}} />
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    screen.debug()
  })
  test("displays loading state appropriately", () => {
    const mockData = mockDataState({
      githubUsers: {
        data: [
          {
            login: "login",
            avatar_url: "avatar",
            html_url: "html",
            type: "User"
          }
        ],
        isLoading: true,
        isError: false
      }
    })
    render(
      <Autocomplete
        onChangeInputFn={() => {}}
        inputValue="a"
        dataState={mockData}
      />
    )
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  test("displays error state when data fetching fails", () => {
    const mockData = mockDataState({
      githubUsers: {
        data: [
          {
            login: "login",
            avatar_url: "avatar",
            html_url: "html",
            type: "User"
          }
        ],
        isLoading: false,
        isError: true
      }
    })
    render(
      <Autocomplete
        onChangeInputFn={() => {}}
        inputValue="a"
        dataState={mockData}
      />
    )
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
  test("calls onChange function when typing in the input", () => {
    const handleChange = vi.fn()
    const mockData = mockDataState({
      githubUsers: {
        data: [
          {
            login: "login",
            avatar_url: "avatar",
            html_url: "html",
            type: "User"
          }
        ],
        isLoading: true,
        isError: false
      }
    })

    render(
      <Autocomplete
        dataState={mockData}
        inputValue=""
        onChangeInputFn={handleChange}
      />
    )
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
