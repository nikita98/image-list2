import React, { FC } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


function getPagesArray(currentPage: number, totalPages: number) { //строим массив страниц
    let halfPages = 5;
    if (window.innerWidth < 567) {
        halfPages = 3
    }
    if (window.innerWidth < 350) {
        halfPages = 2
    }
    let result: number[] = [];
    if (totalPages === 1) {
        return result;
    }
    else {
        let j = (((currentPage - halfPages) < halfPages) ? 1 : currentPage - halfPages);
        let length = totalPages - halfPages * 2 < j ? (totalPages - j) : halfPages * 2;
        for (let i = 0; i <= length; i++) {
            result.push(j);
            j++
        }
    }
    return result;
}


const Pagination: FC = () => {
    const { favorite } = useTypedSelector(state => state.image)
    const { page, pageFavorite, favoritePagesNumber } = useTypedSelector(state => state.page)
    const { setPage, setFavoritePage } = useActions()

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
                                'pagination__item pagination__item--active' :
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
