import { SET_IS_MOBILE_MENU_OPEN } from "../../constants/utility";

const initialState = {
    isMobileMenuOpen: false
}

export const utilityReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_MOBILE_MENU_OPEN:
            return {
                ...state,
                isMobileMenuOpen: action.payload
            }

        default:
            return state;
    }
}