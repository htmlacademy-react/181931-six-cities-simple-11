import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import { Offer } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCityAction = createAction(
  'changeCity',
  (value: CityType) => ({ payload: value })
);

export const showOffersAction = createAction(
  'showOffers',
  (value: Offer[]) => ({ payload: value })
);

export const sortOffersByAction = createAction(
  'sortOffersBy',
  (sortingOption: string) => ({ payload: sortingOption })
);

export const setIsLoadingAction = createAction(
  'setIsLoading',
  (value: boolean) => ({ payload: value })
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>('setError');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);

export const redirectToRoute = createAction<AppRoute>(
  'redirectToRoute'
);

export const setUserEmailAction = createAction(
  'setUserEmail',
  (value: string) => ({ payload: value })
);
