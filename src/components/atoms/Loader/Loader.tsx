import { ReactElement } from "react"

const Loader = ({ altText }: { altText?: string | ReactElement }) => {
  return (
    <>
      <div
        className="animate-spinner inline-block h-12 w-12 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
      <span className="">{altText}</span>
    </>
  )
}
export default Loader
