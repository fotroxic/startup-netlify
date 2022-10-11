
import NewsBelow from "../../components/latestcenter/NewsBelow";
import NewsCenter from "../../components/latestcenter/NewsCenter";
import Latest from "../../components/newsLatestNews/Latest";
import NewsHero from "../../components/latestcenter/NewsHero"


export default function news() {
  return (
    <div>
        <NewsHero />
        <Latest/>
        <NewsCenter/>
    </div>
  )
}
