import PageTitle from "@/components/atoms/PageTitle/PageTitle"

const MainHeader = () => {
  return (
    <div className="relative z-20 flex justify-between items-center">
      <PageTitle title="Rocket DOCS" />
      <a
        className="text-emerald-400 hover:text-emerald-400 transition-all underline hover:no-underline"
        href="/docs"
      >
        Docs
      </a>
    </div>
  )
}
export default MainHeader
