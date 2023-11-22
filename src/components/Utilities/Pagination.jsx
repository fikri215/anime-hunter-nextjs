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
            <button
                onClick={handlePrevPage} 
                className="transition-all hover:text-color-primary"
                >{page !== 1 ? 'PREV' : ''}
            </button>
            <p>{page} of {lastPage}</p>
            <button 
                onClick={handleNextPage}
                className="transition-all hover:text-color-primary"
                >{page !== lastPage ? 'NEXT' : ''}
            </button>
        </div>
    )
}

export default Pagination