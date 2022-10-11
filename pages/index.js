import GeneralCard from "../components/genercard/GeneralCard";
import HeroBanner from "../components/hero/HeroBanner";
import MidBanner from "../components/midbanner/MidBanner";
import News from "../components/news/News";
import Support from "../components/support/Support";
import Tv from "../components/tv/Tv";
import SecondBanner from "../components/secondbanner/SecondBanner"
import Community from "../components/community/Community";
import Jobs from "../components/jobs/Jobs";
import Footer from "../components/footer/Footer";
import NewsSlider from "../components/news/NewsSlider";
import CommunitySlider from "../components/community/CommunitySlider";


export default function Home() {
  return (
   <div>
    <HeroBanner />
    <MidBanner />
    <NewsSlider />
    <SecondBanner />
    {/* <GeneralCard /> */}
    <Support />
    <Community />
    <CommunitySlider />
    {/* <Jobs /> */}
    {/* <Tv /> */}
   </div>
  )
}
