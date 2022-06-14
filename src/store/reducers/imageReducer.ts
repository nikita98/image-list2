import { ImageAction, ImageActionTypes, ImageState } from "../../types/image";

const initialState: ImageState = {
    images: {},
    favoriteImages: [],
    currentImages: [],
    imagePerPage: 20,
    favorite: false,
    loading: false,
    error: null
}

export const imageReducer = (state = initialState, action: ImageAction): ImageState => {
    switch (action.type) {
        case ImageActionTypes.FETCH_IMAGES:
            return { ...state, loading: true }
        case ImageActionTypes.FETCH_IMAGES_SUCCESS:
            const newImages = { ...state.images, ...action.payload }
            return { ...state, loading: false, images: newImages }
        case ImageActionTypes.FETCH_IMAGES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ImageActionTypes.SET_CURRENT_IMAGES:
            return { ...state, currentImages: action.payload, }
        case ImageActionTypes.SET_FAVORITE_IMAGES:
            return { ...state, favoriteImages: action.payload, }
        case ImageActionTypes.SET_FAVORITE_MOD:
            return { ...state, favorite: action.payload, }
        case ImageActionTypes.CHANGE_IMAGE:
            return { ...state, images: state.images }
        default:
            return state
    }
}
