import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, showOffersAction,sortOffersByAction } from './action';
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';
import { SortOptions } from '../const';

const initialState = {
  city: cities[0],
  offers: offers.filter((offer) => offer.city.name !== cities[2].name),
  sortOffersBy:SortOptions.Popular as string,
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
    });
});

export { reducer };
