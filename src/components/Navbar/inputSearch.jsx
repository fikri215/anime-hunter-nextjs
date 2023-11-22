"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return
        
        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
                type="text" 
                placeholder="Search anime..."
                className="p-2 rounded w-full text-color-dark"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button
                className="absolute top-2 end-2 text-color-dark"
                onClick={handleSearch}
            >
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch