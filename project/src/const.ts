const RATING_STARS = 5;
const MAX_PERCENT = 100;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '/404',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

function formatRatingToWidth(rating: number) {
  return (MAX_PERCENT / RATING_STARS) * Math.round(rating);
}

const URL_MARKER_DEFAULT =
  'img/pin.svg';

const URL_MARKER_CURRENT =
  'img/pin-active.svg';

const INITIAL_SORT_VALUE = 'Popular';

const REVIEW_MIN_LENGTH = 50;
const REVIEW_MAX_LENGTH = 50;

const RATING_NUMBERS = [1, 2, 3, 4, 5];

export enum SortOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export { formatRatingToWidth, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, INITIAL_SORT_VALUE, REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH, RATING_NUMBERS};
