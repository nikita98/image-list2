export interface ImageState {
    page: number;
    pageFavorite: number;
    favoritePagesNumber: number,
}
export enum PageActionTypes {
    SET_PAGE = 'SET_PAGE',
    SET_FAVORITE_PAGE = 'SET_FAVORITE_PAGE',
    SET_FAVORITE_PAGES_NUMBER = 'SET_FAVORITE_PAGES_NUMBER',
    ADD_LOADED_PAGES = 'ADD_LOADED_PAGES',
}
interface SetPage {
    type: PageActionTypes.SET_PAGE;
    payload: number;
}
interface SetFavorePage {
    type: PageActionTypes.SET_FAVORITE_PAGE;
    payload: number;
}
interface SetFavorePageNumber {
    type: PageActionTypes.SET_FAVORITE_PAGES_NUMBER;
    payload: number;
}
interface AddLoadedPages {
    type: PageActionTypes.ADD_LOADED_PAGES;
    payload: number;
}
export type PageAction =
    SetPage |
    SetFavorePage |
    SetFavorePageNumber |
    AddLoadedPages

