import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer, Offers } from '../../types/offers';
import { CityType } from '../../types/city';
import { createSelector } from '@reduxjs/toolkit';
import { sortOffers } from '../../utils/sort';

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.Offer].isOffersDataLoading;

export const getCity = (state: State): CityType => state[NameSpace.Offer].city;

export const getOffers = (state: State): Offer[] =>
  state[NameSpace.Offer].offers;

export const getSortOffersBy = (state: State) =>
  state[NameSpace.Offer].sortOffersBy;

export const getOffer = (state: State): Offer | null =>
  state[NameSpace.Offer].offer;

export const getOffersNearby = (state: State): Offers | null =>
  state[NameSpace.Offer].offersNearby;

export const getCurrentCityOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);

export const getCurrentCitySortedOffers = createSelector(
  [getCurrentCityOffers, getSortOffersBy],
  (offers, SortType) => sortOffers(offers, SortType)
);
