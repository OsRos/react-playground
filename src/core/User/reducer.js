import { SET_LOCALE } from "./constants";

const initialState = {locale : "en"}
export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_LOCALE: return {...state, locale:action.payload.locale}
        default : return state
    }
}