import { useEffect, useState } from "react"

import alphabeticallySortByField from "@/utils/alphabeticallySortByField"

const useAutocomplete = ({
  combined,
  dataState,
  sortByFields = []
}: Pick<AutocompleteProps, "combined" | "dataState" | "sortByFields">) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let itemCount = 0
      let items = []
      if (combined) {
        items = alphabeticallySortByField(
          Object.values(dataState).reduce(
            (acc, { data }) => (data ? [...acc, ...data] : acc),
            [] as TAutocompleteData[]
          ),
          sortByFields
        )
        itemCount = items.length
      } else {
        items = alphabeticallySortByField(
          Object.values(dataState).flatMap(({ data }) => data!),
          sortByFields
        )
        itemCount = items.length
      }

      if (e.key === "ArrowDown") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount)
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount)
      } else if (
        e.key === "Enter" &&
        activeIndex >= 0 &&
        activeIndex < itemCount
      ) {
        e.preventDefault()

        const activeItemUrl = items[activeIndex].html_url

        if (activeItemUrl) {
          window.open(activeItemUrl, "_blank")
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [dataState, combined, sortByFields, activeIndex])

  return { activeIndex }
}

export default useAutocomplete
