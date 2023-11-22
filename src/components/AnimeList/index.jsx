import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/${anime.mal_id}`} 
                        className="cover cursor-pointer shadow-xl bg-color-secondary text-color-white hover:text-color-primary transition-all rounded"
                        key={index}>
                        <Image
                            className="w-full max-h-64 object-cover"
                            src={anime.images.webp.image_url}
                            alt="sample image"
                            width={350} 
                            height={350}
                        />
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
      </div>
    )
}

export default AnimeList