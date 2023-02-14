import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {},
});

export const userReducer = userSlice.reducer;
