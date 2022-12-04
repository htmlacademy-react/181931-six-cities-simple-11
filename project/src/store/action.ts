import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import { Offer } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../const';

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
  'user/redirectToRoute'
);

export const setUserEmailAction = createAction(
  'user/setUserEmail',
  (value: string) => ({ payload: value })
);
