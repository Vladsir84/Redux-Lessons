import React from 'react';

const Pagination = ({
    goPrev,
    goNext,
    currentPage,
    totalItems,
    itemsPerPage,
}) => {
    const prevPageAvailable = currentPage > 0;
    const nextPageAvailable =
        currentPage < Math.ceil(totalItems / itemsPerPage) - 1;
    return (
        <div className="pagination">
            <button
                className="btn"
                onClick={goPrev}
                disabled={!prevPageAvailable}
            >
                {prevPageAvailable && '←'}
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button
                className="btn"
                onClick={goNext}
                disabled={!nextPageAvailable}
            >
                {nextPageAvailable && '→'}
            </button>
        </div>
    );
};
export default Pagination;