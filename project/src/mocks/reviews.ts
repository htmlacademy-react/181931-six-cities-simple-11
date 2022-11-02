import { Reviews } from '../types/reviews';

export const reviews: Reviews = [
  {
    hotelId: 1,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2022-11-11T11:11:11.938Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    }
  },
  {
    hotelId: 2,
    comment: 'Another text',
    date: '2022-11-11T11:11:11.938Z',
    id: 2,
    rating: 1,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    }
  },
  {
    hotelId: 3,
    comment: 'Agh...',
    date: '2022-11-11T11:11:11.938Z',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    }
  },
  {
    hotelId: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2022-11-11T11:11:11.938Z',
    id: 4,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    }
  }
];
