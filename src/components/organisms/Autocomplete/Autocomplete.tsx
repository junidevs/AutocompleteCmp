import { FC } from "react"
import { FaSearch } from "react-icons/fa"

import Input from "@/components/atoms/Input"
import AutocompleteItem from "@/components/molecules/AutocompleteItem"
import AutocompleteCombinedGroup from "@/components/organisms/Autocomplete/AutocompleteCombinedGroup"
import useAutocomplete from "@/hooks/useAutocomplete/useAutocomplete"
import alphabeticallySortByField from "@/utils/alphabeticallySortByField"

const Autocomplete: FC<AutocompleteProps> = ({
  dataState,
  allowRedirect = false,
  onChangeInputFn,
  inputValue,
  combined = false,
  sortByFields = []
}) => {
  const { activeIndex } = useAutocomplete({ combined, dataState, sortByFields })
  const { isLoading, isError } = Object.values(dataState).reduce(
    (acc, { isLoading, isError }) => {
      return {
        isLoading: acc.isLoading || isLoading,
        isError: acc.isError || isError
      }
    },
    { isLoading: false, isError: false }
  )

  return (
    <div
      className="relative max-h-[80vh] min-w-[50vw] w-auto overflow-y-scroll no-scrollbar transition-all rounded-2xl"
      tabIndex={0}
    >
      <div className="flex flex-row items-center bg-white p-1 mt-1 rounded-2xl gap-4">
        <FaSearch className="pointer-events-none w-4 h-4 top-1/2 ml-2" />
        <Input value={inputValue} onChange={onChangeInputFn} />
      </div>
      <div className="w-auto overflow-y-scroll no-scrollbar left-0 right-0 mt-1 rounded-md max-h-[60vh] overflow-auto z-10 gap-1 flex flex-col justify-items-center">
        {combined ? (
          <AutocompleteCombinedGroup isError={isError} isLoading={isLoading}>
            {alphabeticallySortByField(
              Object.values(dataState).reduce<TAutocompleteData[]>(
                (acc, { data }) => (data ? acc.concat(data) : acc),
                []
              ),
              sortByFields
            ).map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-5 items-center bg-white p-5"
              >
                <AutocompleteItem
                  key={index}
                  item={item}
                  index={index}
                  allowRedirect={allowRedirect}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </AutocompleteCombinedGroup>
        ) : (
          Object.entries(dataState).map(
            ([
              field,
              {
                isError: isErrorEntries,
                isLoading: isLoadingEntries,
                data: groupedData
              }
            ]) => (
              <div key={field}>
                <AutocompleteCombinedGroup
                  isLoading={isLoadingEntries}
                  isError={isErrorEntries}
                >
                  {groupedData && (
                    <div className="w-auto overflow-y-scroll no-scrollbar left-0 right-0 bg-white rounded-md shadow-lg overflow-auto z-10 gap-3 flex flex-col justify-items-center">
                      <div>
                        <h1 className="mt-2 ml-2 text-lg text-emerald-600 first-letter:text-4xl first-letter:uppercase first-letter:text-emerald-400">
                          {field}
                        </h1>
                      </div>
                      {alphabeticallySortByField(groupedData, sortByFields).map(
                        (item, index) => (
                          <div
                            key={`${field}-${index}`}
                            className="flex flex-row gap-5 items-center bg-white p-5"
                          >
                            <AutocompleteItem
                              key={`${field}-${index}`}
                              item={item}
                              allowRedirect={allowRedirect}
                              index={index}
                              isActive={index === activeIndex}
                            />
                          </div>
                        )
                      )}
                    </div>
                  )}
                </AutocompleteCombinedGroup>
              </div>
            )
          )
        )}
      </div>
    </div>
  )
}

export default Autocomplete
