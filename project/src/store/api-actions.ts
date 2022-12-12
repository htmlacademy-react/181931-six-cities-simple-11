import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  redirectToRoute
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute } from '../const';
import { Offer, Offers } from '../types/offers';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { Review, ReviewData, Reviews } from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  Offer | null,
  number,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  return data;
});

export const fetchOffersNearbyAction = createAsyncThunk<
  Offers,
  number,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffersNearby', async (id, { extra: api }) => {
  const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
  return data;
});

export const fetchOfferReviewsAction = createAsyncThunk<
  Reviews,
  number,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferReviews', async (id, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
  return data;

});

export const checkAuthAction = createAsyncThunk<
  string,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const {
    data: { email },
  } = await api.get<UserData>(APIRoute.Login);

  return email;

});

export const loginAction = createAsyncThunk<
  string,
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
    dispatch(redirectToRoute(AppRoute.Main));
    return email;
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
});

export const sendOfferReviewAction = createAsyncThunk<
  Reviews,
  ReviewData,
  {
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/sendReviewAction',
  async ({ id, rating, comment }, { extra: api }) => {
    const {data} = await api.post<Reviews>(`${APIRoute.Reviews}/${id}`, { rating, comment });

    return data;
  }
);
