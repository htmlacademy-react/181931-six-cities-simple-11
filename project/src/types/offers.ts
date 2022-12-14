export type Host = {
  avatar?: string;
  name: string;
  isPro?: boolean;
  id: number;
  avatarUrl: string;
}

export enum TypeList {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

type LocationCoordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  location: LocationCoordinates;
  name:string;
}

export type Offer = {
  id: number;
  images: string[];
  title?: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  city: OfferCity;
  location: LocationCoordinates;
  previewImage: string;
};


export type Offers = Offer[];
