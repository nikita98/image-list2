import { PageAction, PageActionTypes } from "../../types/page";

export const setPage = (page: number): PageAction => {
    return { type: PageActionTypes.SET_PAGE, payload: page }
}
export const setFavoritePage = (favoritePage: number): PageAction => {
    return { type: PageActionTypes.SET_FAVORITE_PAGE, payload: favoritePage }
}
export const setFavoritePagesNumber = (favoritePagesNumber: number): PageAction => {
    return { type: PageActionTypes.SET_FAVORITE_PAGES_NUMBER, payload: favoritePagesNumber }
}
export const addLoadedPages = (page: number): PageAction => {
    return { type: PageActionTypes.ADD_LOADED_PAGES, payload: page }
}

