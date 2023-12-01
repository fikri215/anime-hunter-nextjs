import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async ({ params }) => {

    const {keyword} = params
    const decodeKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

    return (
        <>
        {/* Search Anime */}
        <section>
            <Header title={`Pencarian untuk "${decodeKeyword}"`} />
            <AnimeList api={searchAnime} />
        </section>

        </>
    )
}

export default Page