const DocsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6 text-emerald-400">
        Welcome to Our Component Library!
      </h1>
      <p className="text-lg text-center mb-8 text-emerald-200">
        Explore the building blocks to create incredible user interfaces. Below
        is a list of our core components:
      </p>

      <ul className="list-disc list-inside bg-[#171720] shadow-md rounded-lg p-6 space-y-3">
        <li className="text-lg text-emerald-500  hover:text-indigo-600 transition duration-300">
          <a className="text-lg text-[#fff]" href="/docs/autocomplete">
            Autocomplete
          </a>{" "}
          - Enhance your forms with our smart autocomplete component.
        </li>
        <li className="text-lg text-emerald-500  hover:text-indigo-600 transition duration-300">
          <a className="text-lg text-[#fff]" href="/docs/stack">
            Stack
          </a>{" "}
          - Easily stack your elements with our versatile stack component.
        </li>
        <li className="text-lg text-emerald-500  hover:text-indigo-600 transition duration-300">
          <a className="text-lg text-[#fff]" href="/docs/timer">
            Timer
          </a>{" "}
          - Integrate a countdown or stopwatch functionality with our timer
          component.
        </li>
        <li className="text-lg text-emerald-500  hover:text-indigo-600 transition duration-300">
          <a className="text-lg text-[#fff]" href="/docs/pagination">
            Pagination
          </a>{" "}
          - Navigate through your data effortlessly with our pagination
          component.
        </li>
        <li className="text-lg text-emerald-500 hover:text-indigo-600 transition duration-300">
          <a
            className="text-lg text-[#fff] text-[#fff]"
            href="/docs/rocket-table"
          >
            Rocket Table
          </a>{" "}
          - Display data beautifully with our dynamic and responsive table
          component.
        </li>
      </ul>

      <p className="text-lg  text-center mt-8 text-emerald-300">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Dive into each component's documentation to learn more about its
        features and how to implement it in your projects. Happy building!
      </p>
    </div>
  )
}
export default DocsPage
