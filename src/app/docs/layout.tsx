import Link from "next/link"
import { ReactNode } from "react"

import { ComponentsList } from "@/mocks/componentsList"

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-[20vw] min-h-[100vh] shadow-[0_35px_60px_-15px_#000] p-4">
        <h2 className="text-emerald-400 text-3xl">Components</h2>
        <ul className="mt-5">
          {ComponentsList.map(({ name, allowRedirect }) => (
            <li key={name}>
              <Link
                className="text-emerald-600 text-lg hover:text-emerald-400 hover:text-xl transition-all mb-3"
                href={allowRedirect ? `/docs/${name.toLowerCase()}` : "#"}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[80vw]  flex justify-center"> 1{children}</div>
    </div>
  )
}
export default DocsLayout
