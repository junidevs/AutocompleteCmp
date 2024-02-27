import { HttpResponse } from "msw"

import { RestResponseResolver } from "@/mocks/handlers"

export const getGithubUsers: RestResponseResolver = () =>
  HttpResponse.json(getGithubUsersResponse)

export const getGithubUsersResponse: { items: GitHubUser[] } = {
  items: [
    {
      login: "test",
      avatar_url:
        "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
      html_url: "test",
      type: "User"
    },
    {
      login: "test",
      avatar_url:
        "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
      html_url: "test",
      type: "User"
    }
  ]
}
