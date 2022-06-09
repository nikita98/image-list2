import React, { FC } from 'react';
import { IPagination } from "../types";

interface PaginationProps {
    pagination: IPagination;
    favorite?: boolean
    changePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ pagination, favorite, changePage }) => {

    function getPagesArray(currentPage: number, totalPages: number) {

        let result: number[] = [];
        if (totalPages === 1) {
            return result;
        }
        else {
            let j = (((currentPage - 5) < 1) ? 1 : currentPage - 5);
            let length = totalPages - 10 < j ? (totalPages - j) : 10;
            for (let i = 0; i <= length; i++) {
                result.push(j);
                j++
            }
        }
        return result;

    }

    let page: number
    if (favorite) {
        page = pagination.favoriteCurrentPage
    }
    else {
        page = pagination.currentPage
    }


    let pagesArray = getPagesArray(page, pagination.totalPages);


    return (
        <div className="pagination">
            <div className="pagination__list">
                {pagesArray.map(p =>
                    <div
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ?
                            'pagination__item pagination__item_active' :
                            'pagination__item'}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pagination;
