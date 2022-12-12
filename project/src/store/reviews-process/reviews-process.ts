import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewProcessType } from '../../types/state';
import { setOfferReviewFormBlocked } from './selector';
import { fetchOfferReviewsAction, sendOfferReviewAction } from '../api-actions';

const initialState: ReviewProcessType = {
  reviewsForOffer: [],
  isOfferReviewFormBlocked: false
};

export const reviewProcessSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.reviewsForOffer = action.payload;
      })
      .addCase(sendOfferReviewAction.fulfilled, (state, action) => {
        state.reviewsForOffer = action.payload;
      })
      .addCase(setOfferReviewFormBlocked, (state, action) => {
        state.isOfferReviewFormBlocked = action.payload;
      });
  },
});
