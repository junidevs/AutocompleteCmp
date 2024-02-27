import { ElementType, memo, ReactNode, useMemo } from "react"

import QueryClientWrapper from "@/app/providers/QueryClientProvider/QueryClientProvider"

type AppWrapperProps = {
  children: ReactNode;
}

type ElementTypeWithChildren = ElementType<{ children: ReactNode }>

const combineComponents = (
  ...components: ElementTypeWithChildren[]
): ElementTypeWithChildren => {
  return components.reduce(
    (AccComponent, CurrentComponent) => {
      return function CombinedComponent({ children }) {
        return (
          <AccComponent>
            <CurrentComponent>{children}</CurrentComponent>
          </AccComponent>
        )
      }
    },
    ({ children }) => children
  )
}

const GlobalWrapper = ({ children }: AppWrapperProps) => {
  const AppProvider = useMemo(
    () => combineComponents((props) => <QueryClientWrapper {...props} />),
    []
  )

  return <AppProvider>{children}</AppProvider>
}

export default memo(GlobalWrapper)
