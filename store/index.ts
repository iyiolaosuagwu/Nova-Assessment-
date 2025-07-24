import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import categorySlice from "./slices/categorySlice";
import expenseSlice from "./slices/expenseSlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["expenses", "categories"],
};

const rootReducer = combineReducers({
    expenses: expenseSlice,
    categories: categorySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
