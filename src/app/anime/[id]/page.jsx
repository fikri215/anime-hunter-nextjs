import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="py-4">
                <h2 className="text-color-white text-2xl text-center">{anime.data.title} - {anime.data.year}</h2>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-white">
                <div className="w-36 flex flex-col justify-center items-center py-2 border rounded">
                    <h3>RANKING</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center py-2 border rounded">
                    <h3>SCORE</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center py-2 border rounded">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center py-2 border rounded">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-white">
                <Image 
                src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={250}
                height={250}
                className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page