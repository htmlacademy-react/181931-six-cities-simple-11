import {SortOptions} from '../const';
import {Offer} from '../types/offers';

export const sortOffers = (offers: Offer[], currentSortOffersBy: string) => {
  const sortedOffers: Offer[] = offers;

  switch (currentSortOffersBy) {
    case SortOptions.LowToHigh:
      return sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case SortOptions.HighToLow:
      return sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case SortOptions.TopRated:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    case SortOptions.Popular:
    default:
      return sortedOffers;
  }
};
