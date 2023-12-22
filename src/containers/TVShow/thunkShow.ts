import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiShowsResponse, ShowDetails, ShowsNames} from '../../types';
import axios from 'axios';

export const getShow = createAsyncThunk<ShowsNames[], string>(
  'tvshows/getShow',
  async (value: string) => {

    const responseGet = await axiosApi.get<ApiShowsResponse[]>(`/shows?q=${value}`);
    const shows = responseGet.data;

    if (shows) {
      const valueData = shows.map(showItem => ({
        id: showItem.show.id,
        name: showItem.show.name,
      }));

      return valueData;
    } else {
      return [];
    }
  }
);

export const getContent = createAsyncThunk<ShowDetails[], number>(
  'tvshows/getContent',
  async (id: number) => {
    const responseGet = await axios.get<ShowDetails>(`https://api.tvmaze.com/shows/${id}`);
    const info = responseGet.data;

    if (info) {
      const valueDetails: ShowDetails = {
        name: info.name,
        image: info.image,
        summary: info.summary,
      };

      return [valueDetails];
    }
    return [];
  }
);