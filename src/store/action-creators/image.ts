import { Dispatch } from "redux";
import axios from "axios";
import { IImage } from "../../types/image";
import { ImageAction, ImageActionTypes } from "../../types/image";


export const fetchImages = (page: number, limit: number) => {
    return async (dispatch: Dispatch<ImageAction>) => {
        try {
            dispatch({ type: ImageActionTypes.FETCH_IMAGES })
            const response = await axios.get<IImage[]>(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            dispatch({ type: ImageActionTypes.FETCH_IMAGES_SUCCESS, payload: { [page]: response.data } })
            dispatch({ type: ImageActionTypes.SET_CURRENT_IMAGES, payload: response.data })
        } catch (e) {
            dispatch({
                type: ImageActionTypes.FETCH_IMAGES_ERROR,
                payload: 'Произошла ошибка'
            })
        }
    }
}

export const setFavoriteImage = (image: IImage): ImageAction => {
    if (typeof (image.favorite) === "undefined") {
        image.favorite = false
    }
    image.favorite = !image.favorite
    return { type: ImageActionTypes.CHANGE_IMAGE, payload: image }
}

export const setFavoriteImages = (images: IImage[]): ImageAction => {
    return { type: ImageActionTypes.SET_FAVORITE_IMAGES, payload: images }
}

export const setFavoriteMod = (favorite: boolean): ImageAction => {
    return { type: ImageActionTypes.SET_FAVORITE_MOD, payload: favorite }
}

export const setCurrentImages = (images: IImage[]): ImageAction => {
    return { type: ImageActionTypes.SET_CURRENT_IMAGES, payload: images }
}



