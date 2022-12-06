import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import { Offer } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../const';
import { Review } from '../types/reviews';

export const changeCityAction = createAction(
  'city/changeCity',
  (value: CityType) => ({ payload: value })
);

export const showOffersAction = createAction(
  'offers/showOffers',
  (value: Offer[]) => ({ payload: value })
);

export const sortOffersByAction = createAction(
  'offers/sortOffersBy',
  (sortingOption: string) => ({ payload: sortingOption })
);

export const setOffersNearbyAction = createAction(
  'offer/setOffersNearby',
  (value: Offer[]) => ({payload: value})
);

export const setOfferAction = createAction(
  'offer/setOffer',
  (value: Offer) => ({payload: value})
);

export const setOfferReviewsAction = createAction(
  'offer/setOfferReviews',
  (value: Review[]) => ({payload: value})
);

export const setIsLoadingAction = createAction(
  'offers/setIsLoading',
  (value: boolean) => ({ payload: value })
);

export const setAuth = createAction<AuthorizationStatus>(
  'user/setAuth'
);

export const setError = createAction<string | null>('setError');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'offers/setOffersDataLoadingStatus'
);

export const redirectToRoute = createAction<AppRoute>(
  'data/redirectToRoute'
);

export const setUserEmailAction = createAction(
  'user/setUserEmail',
  (value: string) => ({ payload: value })
);

export const setOfferReviewFormBlocked = createAction(
  'offer/setOfferReviewFormBlocked',
  (status: boolean) => ({payload: status})
);
