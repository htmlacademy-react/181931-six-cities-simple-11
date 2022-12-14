import { Reviews } from '../../types/reviews';
import ReviewCard from '../review-card/review-card';

type ReviewListProps = {
  reviews: Reviews;
};

const MAX_COMMENTS = 10;

function ReviewsList({ reviews }: ReviewListProps): JSX.Element {
  let sortedReviews:Reviews = [] ;

  if (reviews.length > 0) {
    sortedReviews = reviews.slice().sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
  }

  return (
    <ul className='reviews__list'>
      {sortedReviews.map((item, index) => {
        if (index < MAX_COMMENTS) {
          return (
            <ReviewCard key={item.id} review={item} />
          );
        }
        return '';
      })}
    </ul>
  );
}

export default ReviewsList;
