import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './redux/user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeSlice from './redux/theme/themeSlice';
const rootReducer = combineReducers({
  user: userReducer,
theme:themeSlice
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);