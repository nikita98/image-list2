export interface IImage {
    id: string;
    download_url: string;
    author?: string;
    favorite?: boolean;
    width: string;
    height: string;
}


export interface ImageState {
    images: { [k: string]: IImage[] };
    favoriteImages: IImage[];
    currentImages: IImage[];
    loading: boolean;
    error: null | string;
    limit: number;
    favorite: boolean;
}
export enum ImageActionTypes {
    FETCH_IMAGES = 'FETCH_IMAGES',
    FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
    FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR',
    SET_CURRENT_IMAGES = 'SET_CURRENT_IMAGES',
    SET_FAVORITE_MOD = 'SET_FAVORITE_MOD',
    SET_FAVORITE_IMAGES = 'SET_FAVORITE_IMAGES',
    CHANGE_IMAGE = 'CHANGE_IMAGE',
}
interface FetchimagesAction {
    type: ImageActionTypes.FETCH_IMAGES;
}
interface FetchimagesSuccessAction {
    type: ImageActionTypes.FETCH_IMAGES_SUCCESS;
    payload: Record<string, IImage[]>;
}
interface FetchimagesErrorAction {
    type: ImageActionTypes.FETCH_IMAGES_ERROR;
    payload: string;
}
interface SetCurrentImages {
    type: ImageActionTypes.SET_CURRENT_IMAGES;
    payload: IImage[];
}

interface SetFavoriteImages {
    type: ImageActionTypes.SET_FAVORITE_IMAGES;
    payload: IImage[];
}

interface SetFavoriteMod {
    type: ImageActionTypes.SET_FAVORITE_MOD;
    payload: boolean;
}

interface ChangeImage {
    type: ImageActionTypes.CHANGE_IMAGE;
    payload: IImage;
}

export type ImageAction =
    FetchimagesAction |
    SetCurrentImages |
    FetchimagesSuccessAction |
    FetchimagesErrorAction |
    SetFavoriteImages |
    SetFavoriteMod |
    ChangeImage
