import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, showOffersAction,sortOffersByAction, setIsLoadingAction, setAuth } from './action';
import { cities } from '../mocks/cities';
import { SortOptions, AuthorizationStatus } from '../const';
import { CityType } from '../types/city';
import { Offers } from '../types/offers';


type InitialState = {
  city: CityType;
  offers: Offers;
  sortOffersBy: string;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  login?: string;
};

const initialState: InitialState = {
  city: cities[0],
  offers:[],
  sortOffersBy:SortOptions.Popular as string,
  isLoading:false,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersByAction, (state, action) => {
      state.sortOffersBy = action.payload;
    })
    .addCase(setIsLoadingAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
