import { PageAction, PageActionTypes, ImageState } from "../../types/page";

const initialState: ImageState = {
    page: 1,
    pageFavorite: 1,
    favoritePagesNumber: 0,
}

export const pageReducer = (state = initialState, action: PageAction): ImageState => {
    switch (action.type) {
        case PageActionTypes.SET_PAGE:
            return { ...state, page: action.payload, }
        case PageActionTypes.SET_FAVORITE_PAGE:
            return { ...state, pageFavorite: action.payload, }
        case PageActionTypes.SET_FAVORITE_PAGES_NUMBER:
            return { ...state, favoritePagesNumber: action.payload, }
        default:
            return state
    }
}
