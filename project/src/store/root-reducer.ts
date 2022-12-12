import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerProcessSlice } from './offer-process/offer-process';
import { reviewProcessSlice } from './reviews-process/reviews-process';
import { userProcessSlice } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerProcessSlice.reducer,
  [NameSpace.Review]: reviewProcessSlice.reducer,
  [NameSpace.User]: userProcessSlice.reducer,
});
