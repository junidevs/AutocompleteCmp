import Image from "next/image"
import { FC } from "react"

import { isGitHubUser } from "@/utils/isGithubUser"

const AutocompleteItem: FC<{
  item: TAutocompleteData;
  allowRedirect: boolean;
  index: number;
  isActive?: boolean;
}> = ({ item, allowRedirect, index, isActive }) => {
  const imageUrl = isGitHubUser(item) ? item.avatar_url : item.owner.avatar_url
  const displayName = isGitHubUser(item) ? item.login : item.name
  const itemUrl = allowRedirect ? item.html_url : "#"
  const activeClass = isActive
    ? "bg-emerald-200 transition-all duration-500 ease-in-out rounded-2xl w-full"
    : ""

  return (
    <div
      key={index}
      className={`flex flex-row gap-1 p-2 ${activeClass}`}
      tabIndex={0}
      aria-selected={isActive ? "true" : "false"}
    >
      <Image
        width={60}
        height={60}
        alt={`avatar-${index}`}
        className="rounded-full"
        src={imageUrl ?? ""}
      />
      <a
        role="button"
        href={itemUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 visited:text-purple-500 visited:font-bold focus:scale-110 focus:ml-2 focus:p-4 focus:border-blue-800"
      >
        {displayName}
      </a>
    </div>
  )
}
export default AutocompleteItem
