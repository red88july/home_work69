import {createSlice} from '@reduxjs/toolkit';
import {getShow} from './thunkShow';
import {ShowsNames} from "../../types";

interface ShowsSlice {
  name: ShowsNames[];
  loading: boolean,
  error: boolean,
}

const initialState: ShowsSlice = {
  name: [],
  loading: false,
  error: false,
};

export const shwoSlice = createSlice({
  name: 'tvshows',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getShow.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(getShow.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload;
    });

    builder.addCase(getShow.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
});

export const showReducer = shwoSlice.reducer;


