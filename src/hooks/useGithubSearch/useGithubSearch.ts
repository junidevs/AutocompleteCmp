import { useQuery } from "@tanstack/react-query"

import getSearchByQuery, {
  TGetSearchByQueryProps
} from "@/services/queries/getSearchByQuery"

const useGithubSearch = ({ query, resource }: TGetSearchByQueryProps) => {
  return useQuery({
    // we could use something like this to get higher service design abstraction https://github.com/lukemorales/query-key-factory
    queryKey: ["useGithubSearch", query, resource],
    queryFn: () => getSearchByQuery({ query, resource }),
    enabled: query.length >= 3
  })
  // https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
  // here we could create infinite query for fetching more than only first page
}

export default useGithubSearch
