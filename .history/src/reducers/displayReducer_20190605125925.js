import {
    TOGGLE_TOP_MENU
} from '../actions/display';

const initialState = {
    menu_class_togg: false
};

const displayReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_TOP_MENU) {
        return Object.assign({}, state, {
            menu_class_togg: action.menu_class_togg
        });
    }
    return state;
};

export default displayReducer;