import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { CityType } from './city.js';
import { Offer, Offers } from './offers.js';
import { Reviews } from './reviews.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferProcessType = {
  city: CityType;
  offers: Offers;
  sortOffersBy: string;
  isOffersDataLoading: boolean;
  offersNearby: Offers | null;
  offer: Offer | null;
};

export type ReviewProcessType = {
  reviewsForOffer: Reviews;
  isOfferReviewFormBlocked: boolean;
};

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
};
