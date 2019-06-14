import {
    TOGGLE_TOP_MENU
} from '../actions';

const initialState = {
    menu_class: ''
};

const displayReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_TOP_MENU) {
        return Object.assign({}, state, {
            menu_class: action.menu_class
        });
    }
    return state;
};

export default displayReducer;