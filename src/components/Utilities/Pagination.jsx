const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if(page === lastPage) return
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        if(page === 1) return
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 text-color-white gap-4 md:text-2xl">
            {page <= 1 ? '' : <button onClick={handlePrevPage} className="transition-all hover:text-color-primary">PREV</button>}       
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? '' : <button onClick={handleNextPage} className="transition-all hover:text-color-primary">NEXT</button>}
        </div>
    )
}

export default Pagination