import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  showOffersAction,
  sortOffersByAction,
  setIsLoadingAction,
  setAuth,
  setUserEmailAction,
  setOfferReviewsAction,
  setOffersNearbyAction,
  setOfferAction,
  setOfferReviewFormBlocked,
} from './action';
import { cities } from '../mocks/cities';
import { SortOptions, AuthorizationStatus } from '../const';
import { CityType } from '../types/city';
import { Offer, Offers } from '../types/offers';
import { Reviews } from '../types/reviews';

type InitialState = {
  city: CityType;
  offers: Offers;
  sortOffersBy: string;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  login?: string;
  reviewsForOffer: Reviews;
  offersNearby: Offers | null;
  offer: Offer | null;
  isOfferReviewFormBlocked: boolean;
};

const initialState: InitialState = {
  city: cities[0],
  offers: [],
  sortOffersBy: SortOptions.Popular as string,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  reviewsForOffer: [],
  offersNearby: [],
  offer: null,
  isOfferReviewFormBlocked: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersNearbyAction, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setOfferReviewsAction, (state, action) => {
      state.reviewsForOffer = action.payload;
    })
    .addCase(sortOffersByAction, (state, action) => {
      state.sortOffersBy = action.payload;
    })
    .addCase(setIsLoadingAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setOfferAction, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmailAction, (state, action) => {
      state.login = action.payload;
    })
    .addCase(setOfferReviewFormBlocked, (state, action) => {
      state.isOfferReviewFormBlocked = action.payload;
    });
});

export { reducer };
