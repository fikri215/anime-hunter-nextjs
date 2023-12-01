import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce, shuffleRecommendAnime } from "../libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendAnime = reproduce(recommendAnime, 4)

  return (
    <>
      {/* Most Viewed */}
      <section>
        <Header title={"Top Viewed"} linkHref={"/popular"} linkTitle={"See All"} />
        <AnimeList api={topAnime} />
      </section>

      {/* Latest Anime */}
      <section>
        <Header title={"Recommendation"} linkHref={"/recommendation"} linkTitle={"See All"} />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  )
}

export default Page