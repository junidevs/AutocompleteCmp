import { ComponentProps, createContext, useEffect, useState } from "react"

import Loader from "@/components/atoms/Loader"

const MSWContext = createContext("")

type Props = Omit<ComponentProps<typeof MSWContext.Provider>, "value">

const MswProvider = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      import("@/mocks/browser")
        .then(({ worker }) => worker.start())
        .then(() => setLoaded(true))
    } else {
      setLoaded(true)
    }
  }, [])

  return (
    <MSWContext.Provider value={""}>
      {loaded ? children : <Loader />}
    </MSWContext.Provider>
  )
}

export default MswProvider
