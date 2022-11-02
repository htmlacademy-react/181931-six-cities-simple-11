export type Host = {
  avatar: string;
  name: string;
  isPro: boolean;
}

export enum TypeList {
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
  hotel = 'Hotel',
}

export type Offer = {
  id: number;
  images: string[];
  title?: string;
  description: string;
  isPremium: boolean;
  type: TypeList;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
};


export type Offers = Offer[];
