import { client } from "@/services/client"

// Define a generic type for the response, with a generic type parameter T for the items array
type TResSearchByQuery<T> = {
  total_count: number; // Assuming total_count can vary, not always 2
  incomplete_results: boolean;
  items: T[];
}

export type TGetSearchByQueryProps = {
  resource: "repositories" | "code" | "commits" | "issues" | "topics" | "users";
  query: string;
}

const getSearchByQuery = async({
  query,
  resource
}: TGetSearchByQueryProps) => {
  const { data } = await client.get<TResSearchByQuery<GitHubUser | GitHubRepo>>(
    `/search/${resource}`,
    {
      params: {
        q: query,
        per_page: 50
      }
    }
  )
  return data
}

export default getSearchByQuery
