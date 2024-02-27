export const isGitHubUser = (
  item: GitHubUser | GitHubRepo
): item is GitHubUser =>
  "type" in item && (item.type === "User" || item.type === "Organization")
