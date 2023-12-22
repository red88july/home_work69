import {createSlice} from '@reduxjs/toolkit';
import {getContent, getShow} from './thunkShow';
import {ShowDetails, ShowsNames} from '../../types';

interface ShowsSlice {
  name: ShowsNames[];
  content: ShowDetails[],
  loading: boolean,
  error: boolean,
}

const initialState: ShowsSlice = {
  name: [],
  content:[],
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

    builder.addCase(getContent.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(getContent.fulfilled, (state, action) => {
      state.loading = false;
      state.content = action.payload;
    });

    builder.addCase(getContent.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
});

export const showReducer = shwoSlice.reducer;


