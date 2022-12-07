import { Reviews } from '../../types/reviews';
import ReviewCard from '../review-card/review-card';

type ReviewListProps = {
  reviews: Reviews;
};

function ReviewsList({ reviews }: ReviewListProps): JSX.Element {
  let sortedReviews:Reviews = [] ;

  if (reviews.length > 0) {
    sortedReviews = reviews.slice(0, 10).sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
  }

  return (
    <ul className='reviews__list'>
      {sortedReviews.map((item) => (
        <ReviewCard key={item.id} review={item} />
      ))}
    </ul>
  );
}

export default ReviewsList;
