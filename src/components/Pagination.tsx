import React, { FC } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Pagination: FC = () => {
    const { favorite } = useTypedSelector(state => state.image)
    const { page, pageFavorite, favoritePagesNumber } = useTypedSelector(state => state.page)
    const { setPage, setFavoritePage } = useActions()


    function getPagesArray(currentPage: number, totalPages: number) { //строим массив страниц
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

    function changePage(p: number) {
        favorite ? setFavoritePage(p) : setPage(p)
    }

    let pagesArray = getPagesArray(favorite ? pageFavorite : page, favorite ? favoritePagesNumber : 150);

    return (
        <div className="pagination">
            <div className="container">
                <div className="pagination__list">
                    {pagesArray.map(p =>
                        <div
                            onClick={() => changePage(p)}
                            key={p}
                            className={(favorite ? pageFavorite : page) === p ?
                                'pagination__item pagination__item_active' :
                                'pagination__item'}
                        >
                            {p}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pagination;
