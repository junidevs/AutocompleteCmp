import { HttpResponse } from "msw"

import { RestResponseResolver } from "@/mocks/handlers"

export const getGithubRepositories: RestResponseResolver = () =>
  HttpResponse.json(getGithubRepositoriesResponse)

export const getGithubRepositoriesResponse: { items: GitHubRepo[] } = {
  items: [
    {
      name: "test",
      owner: {
        avatar_url:
          "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      },
      html_url: "test"
    }
  ]
}
