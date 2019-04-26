import {
    createStore, combineReducers
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducers/reducer';


export default createStore(
    combineReducers({
        form: formReducer
    })
);
// export default createStore(reducer);

// reducer
