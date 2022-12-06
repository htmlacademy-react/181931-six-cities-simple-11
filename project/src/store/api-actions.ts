import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showOffersAction,
  setAuth,
  setOffersDataLoadingStatus,
  redirectToRoute,
  setUserEmailAction,
  setOffersNearbyAction,
  setOfferAction,
  setOfferReviewsAction,
  setOfferReviewFormBlocked,
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute } from '../const';
import { Offer, Offers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { Review, ReviewData } from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(showOffersAction(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  dispatch(setOfferAction(data));
});

export const fetchOffersNearbyAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffersNearby', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(setOffersNearbyAction(data));
});

export const fetchOfferReviewsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferReviews', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(setOfferReviewsAction(data));
  } catch {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const {
      data: { email },
    } = await api.get<UserData>(APIRoute.Login);
    dispatch(setAuth(AuthorizationStatus.Auth));
    dispatch(setUserEmailAction(email));
  } catch {
    dispatch(setAuth(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setUserEmailAction(email));
    dispatch(setAuth(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setAuth(AuthorizationStatus.NoAuth));
});

export const sendOfferReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewAction',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Reviews}/${id}`, {rating, comment});
    dispatch(fetchOfferReviewsAction(id));
    dispatch(setOfferReviewFormBlocked(false));
  }
);
