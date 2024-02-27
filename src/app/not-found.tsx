import Image from "next/image"

function NotFoundPage() {
  return (
    <div className="shadow-2xl shadow-[#EF5E59] flex flex-row items-center overflow-hidden min-h-[350px] min-w-[350px] h-[40vw] w-[40vw] mx-auto backdrop-blur-md bg-[#EF5E59] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Image src="/not-found.jpg" alt="not found" objectFit="contain" fill />
    </div>
  )
}

export default NotFoundPage
