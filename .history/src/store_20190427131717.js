import {
    createStore,
    applyMiddleware
} from 'redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { loadAuthToken } from './local-storage';
// import reducer from './reducers/reducer';
const store = createStore(rootReducer, applyMiddleware(thunk));
// export default createStore(rootReducer);
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
// reducer
