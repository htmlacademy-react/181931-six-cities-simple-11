import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import {Offer} from '../types/offers';

export const changeCityAction = createAction('changeCity',(value: CityType) => ({payload: value}));

export const showOffersAction = createAction('showOffers',(value:Offer[]) =>({payload:value}));

export const sortOffersByAction = createAction(
  'sortOffersBy',
  (sortingOption:string) => ({ payload: sortingOption })
);
