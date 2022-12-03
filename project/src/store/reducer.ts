import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, showOffersAction,sortOffersByAction, setIsLoadingAction, requireAuthorization, setError } from './action';
import { cities } from '../mocks/cities';
// import { offers } from '../mocks/offers';
import { SortOptions, AuthorizationStatus } from '../const';
import { CityType } from '../types/city';
import { Offers } from '../types/offers';


type InitialState = {
  city: CityType;
  offers: Offers;
  sortOffersBy: string;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  login?: string;
};

const initialState: InitialState = {
  city: cities[0],
  offers:[],
  sortOffersBy:SortOptions.Popular as string,
  isLoading:false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
