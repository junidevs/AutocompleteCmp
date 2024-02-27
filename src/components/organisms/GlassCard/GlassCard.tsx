import { ReactNode } from "react"

type TGlassCard = {
  headerSlot: ReactNode;
  mainContentSlot: ReactNode;
  footerSlot: ReactNode;
}
const GlassCard = ({ headerSlot, mainContentSlot, footerSlot }: TGlassCard) => {
  return (
    <div className="overflow-hidden relative min-h-[80vh] p-8 rounded-3xl w-3/4 mx-auto backdrop-blur-lg shadow-lg border border-gray-200/10">
      <div className="w-[100%] mb-12">{headerSlot}</div>
      <section className="z-10 absolute top-0 left-0 w-full h-full">
        {mainContentSlot}
      </section>
      {footerSlot && <section>{footerSlot}</section>}
    </div>
  )
}
export default GlassCard
