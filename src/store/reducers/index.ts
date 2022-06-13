import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { pageReducer } from "./pageReducer";


export const rootReducer = combineReducers({
    image: imageReducer,
    page: pageReducer
})

export type RootState = ReturnType<typeof rootReducer>
