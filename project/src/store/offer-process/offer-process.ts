import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortOptions } from '../../const';
import {
  fetchOfferAction,
  fetchOffersAction,
  fetchOffersNearbyAction,
} from '../api-actions';
import { CityType } from '../../types/city';
import { OfferProcessType } from '../../types/state';
import { cities } from '../../mocks/cities';

const initialState: OfferProcessType = {
  city: cities[0],
  offers: [],
  offer: null,
  isOffersDataLoading: false,
  offersNearby: [],
  sortOffersBy: SortOptions.Popular as string,
};

export const offerProcessSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCityAction: (state, action: PayloadAction<CityType>) => {
      state.city = action.payload;
    },
    sortOffersByAction: (state, action: PayloadAction<string>) => {
      state.sortOffersBy = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      });
  },
});

export const { changeCityAction, sortOffersByAction } =
  offerProcessSlice.actions;
