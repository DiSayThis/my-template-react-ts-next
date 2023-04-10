import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITokenState {
	token: string;
}

const initialState: ITokenState = { token: '' };

const rootSlice = createSlice({
	name: 'token',
	initialState: initialState,
	reducers: {
		setToken: (state, action: PayloadAction<ITokenState>) => {
			state.token = action.payload.token;
		},
		saveToken: (state) => {
			const token = localStorage.getItem('token');
			if (token) localStorage.setItem('token', token);
			state.token = token || '';
		},
		removeToken: (state) => {
			state.token = '';
		},
	},
});

export const TokenActions = rootSlice.actions;

export const tokenReducer = rootSlice.reducer;
