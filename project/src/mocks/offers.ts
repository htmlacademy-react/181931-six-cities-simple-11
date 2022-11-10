import { Offers, TypeList } from '../types/offers';

export const offers: Offers = [
  {
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: '«Beautiful & luxurious studio at great location»',
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    type: TypeList.hotel,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 220,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    title: '«Bla - Bla lounge»',
    description: 'A quiet cozy and picturesque ',
    isPremium: false,
    type: TypeList.house,
    rating: 2.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 320,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: 3,
    images: ['img/apartment-01.jpg'],
    title: '«Bla - Bla lounge»',
    description: 'A quiet cozy and picturesque ',
    isPremium: false,
    type: TypeList.house,
    rating: 5,
    bedrooms: 1,
    maxAdults: 1,
    price: 120,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: 4,
    images: ['img/apartment-01.jpg'],
    title: '«Bla - Bla lounge»',
    description: 'A quiet cozy and picturesque ',
    isPremium: false,
    type: TypeList.house,
    rating: 1.8,
    bedrooms: 5,
    maxAdults: 10,
    price: 120,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
];
