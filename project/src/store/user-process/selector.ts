import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string | null =>
  state[NameSpace.User].userEmail;

export const setUserEmailAction = createAction(
  'user/setUserEmail',
  (value: string) => ({ payload: value })
);
