import { ChangeEvent } from "react"

declare global {
  interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    type: "User";
  }

  interface GitHubRepo {
    name: string;
    owner: {
      avatar_url: string;
    };
    html_url: string;
  }

  type TAutocomplete = {
    dataState: {
      [key: string]: {
        isError: boolean;
        isLoading: boolean;
        data: (GitHubUser | GitHubRepo)[] | undefined;
      };
    };
    allowRedirect?: boolean;
    onChangeInputFn: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    combined?: boolean;
  }

  type TAutocompleteData = GitHubUser | GitHubRepo

  interface AutocompleteProps {
    dataState: Record<
      string,
      { isError?: boolean; isLoading?: boolean; data?: TAutocompleteData[] }
    >;
    allowRedirect?: boolean;
    onChangeInputFn: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    combined?: boolean;
    sortByFields?: string[];
  }

  type ResolverExtractor<T extends (...args: any) => any> = Parameters<T>["1"]
  type RestResponseResolver =
    | ResolverExtractor<typeof get>
    | ResolverExtractor<typeof post>
    | ResolverExtractor<typeof patch>
    | ResolverExtractor<typeof remove>
}
