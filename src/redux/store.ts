import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { tokenReducer } from './token/reducer';

const rootReducer = combineReducers({
	token: tokenReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
