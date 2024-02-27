import { http } from "msw"

import { getGithubRepositories } from "@/mocks/responses/getGithubRepositories"
import { getGithubUsers } from "@/mocks/responses/getGithubUsers"

const { get } = http

const createEndpoint = (pathname: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/${pathname}`

export const handlers = [
  get(createEndpoint("search/users"), getGithubUsers),
  get(createEndpoint("search/repositories"), getGithubRepositories)
]
