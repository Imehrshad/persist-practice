import storage from 'redux-persist/lib/storage'
import { shoppingCardSlice } from './features/shoppingCard/shoppingCardReducer';
import { persistReducer, persistStore } from 'redux-persist';
const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const configuration = {
    key: "globalStorage",
    storage
}
const rootReducer = combineReducers({
    shoppingCardSlice,
})
const myPersistReducer = persistReducer(configuration, rootReducer)
export const store = configureStore({
    reducer: myPersistReducer

})
export const persistedStore = persistStore(store)