import { ChangeEvent } from "react"

// For example in real life we could create something like this https://mui.com/material-ui/react-text-field/
// to get effect of multi reusable type input [ select / number etc based on type and props lik children to render items in select]
const Input = ({
  value,
  onChange
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="transition-all focus:border-transparent focus:ring-0 w-full p-2 border border-blue-900 border-l-1 border-t-0 border-b-0 border-r-0 focus:outline-none"
      placeholder="Search..."
      role="textbox"
    />
  )
}

export default Input
