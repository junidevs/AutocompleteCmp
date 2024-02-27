import { expect, test } from "vitest"

import { isGitHubUser } from "./isGithubUser"

type GitHubUserWithExtra = GitHubUser & { extra: string }

test("returns true for a valid GitHubUser object", () => {
  const user: GitHubUser = {
    login: "testUser",
    avatar_url: "http://example.com/avatar.jpg",
    html_url: "http://example.com/profile",
    type: "User"
  }
  expect(isGitHubUser(user)).toBe(true)
})

test("returns false for an object with incorrect type", () => {
  const repo: GitHubRepo = {
    name: "testRepo",
    owner: { avatar_url: "http://example.com/avatar.jpg" },
    html_url: "http://example.com/repo"
  }
  expect(isGitHubUser(repo)).toBe(false)
})

test("returns true for a GitHubUser object with additional properties", () => {
  const userWithExtra: GitHubUserWithExtra = {
    login: "testUser",
    avatar_url: "http://example.com/avatar.jpg",
    html_url: "http://example.com/profile",
    type: "User",
    extra: "extraValue"
  }
  expect(isGitHubUser(userWithExtra)).toBe(true)
})
