import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Reviews } from '../../types/reviews';
import { createAction } from '@reduxjs/toolkit';

export const getOfferReviews = (state: State): Reviews =>
  state[NameSpace.Review].reviewsForOffer;

export const setOfferReviewFormBlocked = createAction(
  'offer/setOfferReviewFormBlocked',
  (status: boolean) => ({payload: status})
);
