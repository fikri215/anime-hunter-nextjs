import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="p-4 flex justify-between">
            <h1 className="text-2xl font-bold text-color-white">{title}</h1>
            <Link 
                href={linkHref ? linkHref : ''} 
                className="text-xl underline text-color-white hover:text-color-primary transition-all"
                >{linkTitle ? linkTitle : ''}
            </Link>
        </div>
    )
}

export default Header