import { Review } from '../../types/reviews';
import {formatRatingToWidth} from '../../const';

type ReviewFormProps = {
  review: Review;
}

function ReviewCard({review}: ReviewFormProps): JSX.Element {
  const formatDate = (date: string) => new Date(date).toLocaleString('en-US', {month: 'long', year: 'numeric'});

  return (
    <li key={`review-${review.id}`} className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={review.user.avatarUrl}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'></span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: formatRatingToWidth(review.rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{review.comment}</p>
        <time className='reviews__time' dateTime={review.date}>
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewCard;
