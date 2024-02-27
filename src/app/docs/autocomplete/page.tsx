"use client"
import { ChangeEvent, useState } from "react"

import Autocomplete from "@/components/organisms/Autocomplete"
import useGithubSearch from "@/hooks/useGithubSearch/useGithubSearch"

const AutocompletePageCmp = () => {
  const [inputValue, setInputValue] = useState("")

  // in this case debounce search term would be a good feature to not spam server by requests
  const {
    data: githubUsers,
    isLoading: isLoadingUsers,
    isError: isErrorUsers
  } = useGithubSearch({
    query: inputValue,
    resource: "users"
  })
  const {
    data: githubRepos,
    isLoading: isLoadingRepos,
    isError: isErrorRepos
  } = useGithubSearch({
    query: inputValue,
    resource: "repositories"
  })

  const handleInputChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value)
  }

  const dataState: TAutocomplete["dataState"] = {
    githubUsers: {
      data: githubUsers?.items,
      isLoading: isLoadingUsers,
      isError: isErrorUsers
    },
    githubRepos: {
      data: githubRepos?.items,
      isLoading: isLoadingRepos,
      isError: isErrorRepos
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Autocomplete
        combined
        inputValue={inputValue}
        dataState={dataState}
        allowRedirect
        onChangeInputFn={handleInputChange}
        sortByFields={["login", "name"]}
      />
    </div>
  )
}
export default AutocompletePageCmp
