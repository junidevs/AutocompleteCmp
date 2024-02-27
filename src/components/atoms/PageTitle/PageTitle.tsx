type TPageTitle = {
  title?: string;
}
const PageTitle = ({ title = "Title not defined" }: TPageTitle) => {
  return (
    <h1
      className={`first-letter:text-5xl first-letter:text-emerald-400 text-white font-bold`}
    >
      {title}
    </h1>
  )
}
export default PageTitle
