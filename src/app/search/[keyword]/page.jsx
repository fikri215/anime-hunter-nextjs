import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"

const Page = async ({ params }) => {

    const {keyword} = params
    const decodeKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
    const searchAnime = await response.json()

    return (
        <>
        {/* Search Anime */}
        <section>
            <Header title={`Pencarian untuk ${decodeKeyword}`} />
            <AnimeList api={searchAnime} />
        </section>

        </>
    )
}

export default Page