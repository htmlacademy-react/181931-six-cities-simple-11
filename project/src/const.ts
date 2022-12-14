import { cities } from './mocks/cities';

const RATING_STARS = 5;
const MAX_PERCENT = 100;
const INITIAL_SORT_VALUE = 'Popular';
const RATING_NUMBERS = [1, 2, 3, 4, 5];

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

export const formatRatingToWidth = (rating: number) => (MAX_PERCENT / RATING_STARS) * Math.round(rating);

export const getRandomPositiveNumber = () => {
  const min = 0;
  const max = cities.length;
  const randomIndex = Math.floor(Math.random() * (max - min)) + min;
  return randomIndex;
};

export enum MarkerTypes {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}


export enum ReviewLength {
  Min = 50,
  Max = 300
}

export enum SortOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum NameSpace {
  Offer = 'OFFER',
  Review = 'REVIEW',
  User = 'USER',
}

export { INITIAL_SORT_VALUE, RATING_NUMBERS};
