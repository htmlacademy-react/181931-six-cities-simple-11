export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type ReviewData = Omit<Review, 'user' | 'date'>;

export type Reviews = Review[];
