import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LikesReducer from '../Slices/LikeSlice'; 

// Configure persist options
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Optionally, you can blacklist certain reducers or whitelist only specific ones
  // blacklist: ['reducerToExclude'],
  // whitelist: ['reducerToPersist'],
};

// Create a persisted reducer for Likes
const persistedLikesReducer = persistReducer(persistConfig, LikesReducer);

// Create the Redux store using configureStore and the persisted reducer
const store = configureStore({
  reducer: { Likes: persistedLikesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Create a persisted store using persistStore
const persistor = persistStore(store);

export { store, persistor };