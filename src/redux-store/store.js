import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './../reducer/combinedReducers';

// the single source of truth!!!

const initialState = {
    messages: [],
    isLoading: true,
    bulkSelectStatus: false
}

const store = createStore(
        combinedReducers,
        initialState,
        applyMiddleware(thunk)
    );

    export default store;
