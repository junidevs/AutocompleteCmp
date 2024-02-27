import MainFooter from "@/components/molecules/MainFooter"
import MainHeader from "@/components/molecules/MainHeader/MainHeader"
import GlassCard from "@/components/organisms/GlassCard"
import WordsOrbit from "@/components/organisms/MacOrbit"

const MainPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <GlassCard
        headerSlot={<MainHeader />}
        mainContentSlot={<WordsOrbit />}
        footerSlot={<MainFooter />}
      />
    </div>
  )
}

export default MainPage
