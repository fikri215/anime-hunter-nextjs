"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"

const Page = () => {

    const [page, setPage] = useState(1)
    const [popular, setPopular] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const data = await response.json()
        setPopular(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    return (
        <>
            <HeaderMenu title={`ANIME POPULAR #${page}`} />
            <AnimeList api={popular}/>
            <Pagination page={page} lastPage={popular.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}

export default Page