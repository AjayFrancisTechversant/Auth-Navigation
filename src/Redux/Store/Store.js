import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LikesReducer from '../Slices/LikeSlice'; 
import AddFriendReducer from '../Slices/AddFriendSlice'

// Configure persist options
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Optionally, you can blacklist certain reducers or whitelist only specific ones
  // whitelist: ['Likes'],
  // blacklist: ['AddFriend']
};

//combine all reducers into rootreducers
const rootReducer=combineReducers({
  Likes:LikesReducer,
  AddFriend:AddFriendReducer

})

// Create a persisted reducer 
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store using configureStore and the persisted reducer
const store = configureStore({
  reducer:  persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Create a persisted store using persistStore
const persistor = persistStore(store);

export { store, persistor };
