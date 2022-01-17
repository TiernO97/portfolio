import { SET_IS_MOBILE_MENU_OPEN } from "../../constants/utility";

export const setIsMobileMenuOpen = data => dispatch => {
    dispatch({
        type: SET_IS_MOBILE_MENU_OPEN,
        payload: data
    })
}