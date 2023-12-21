import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiShowsResponse, ShowsNames} from '../../types';

export const getShow = createAsyncThunk<ShowsNames[], string>(
  'tvshows/getShow',
  async (value: string) => {
    try {
      const responseGet = await axiosApi.get<ApiShowsResponse[]>(`/shows?q=${value}`);
      const shows = responseGet.data;

      if (shows) {
        const valueData = shows.map(showItem => ({
          id: showItem.show.id,
          name: showItem.show.name,
        }));

        console.log('Value data', valueData);

        return valueData;
      }

      return [];
    } catch (error) {
      console.error('Error fetching shows:', error);
      throw error;
    }
  }
);
