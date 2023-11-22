import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4`)
  const topAnime = await response.json()

  return (
    <>
      {/* Most Viewed */}
      <section>
        <Header title={"Top Viewed"} linkHref={"/popular"} linkTitle={"See All"} />
        <AnimeList api={topAnime} />
      </section>

      {/* Latest Anime */}
      <section>
        <Header title={"Latest Anime"} linkHref={"/latest"} linkTitle={"See All"} />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page