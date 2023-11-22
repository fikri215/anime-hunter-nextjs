import Link from "next/link"
import InputSearch from "./inputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-primary">
            <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
                <Link href="/" className="font-bold text-color-white md:text-2xl">ANIME HUNTER</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar