import { ReactNode } from "react"

import Loader from "@/components/atoms/Loader"

const AutocompleteCombinedGroup = ({
  children,
  isLoading,
  isError
}: {
  children: ReactNode;
  isLoading: boolean | undefined;
  isError: boolean | undefined;
}) => {
  return (
    <>
      {isLoading ? (
        <div className="flex flex-row gap-5 items-center bg-white p-5">
          <Loader
            altText={<p className="text-[16px] font-bold">Loading...</p>}
          />
        </div>
      ) : isError ? (
        <p>Error loading .</p>
      ) : (
        children
      )}
    </>
  )
}
export default AutocompleteCombinedGroup
