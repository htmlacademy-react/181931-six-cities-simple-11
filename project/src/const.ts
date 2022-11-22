const RATING_STARS = 5;
const MAX_PERCENT = 100;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

function formatRatingToWidth(rating: number) {
  return (MAX_PERCENT / RATING_STARS) * Math.round(rating);
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';


export { formatRatingToWidth};
