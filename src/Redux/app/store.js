import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './rootReducer';

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            ImmutableCheck: false,

        })
});


const { dispatch, getState } = store;

export { store, dispatch, getState }