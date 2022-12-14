import React, { useState, ChangeEvent } from 'react';
import {
  RATING_NUMBERS,
  ReviewLength
} from '../../const';
import useAppDispatch from '../../hooks/useAppDispatch';
import { sendOfferReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  currentOfferId: number;
};

function ReviewsForm({ currentOfferId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const [reviewIsSending, setStatusReviewSending] = useState(false);

  const handleFieldChange = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setStatusReviewSending(true);

    if (currentOfferId && formData.rating && formData.review) {

      dispatch(
        sendOfferReviewAction({
          id: currentOfferId,
          rating: Number(formData.rating),
          comment: formData.review,
        })
      );

      setFormData({
        rating: 0,
        review: '',
      });

      setStatusReviewSending(false);
    }
  };

  const ratingInputs = RATING_NUMBERS.map((item: number) => (
    <React.Fragment key={item}>
      <input
        onChange={(evt) => {
          setFormData({
            ...formData,
            rating: Number(evt.target.value)
          });
        }}
        className='form__rating-input visually-hidden'
        name='rating'
        value={item}
        id={`${item}-stars`}
        type='radio'
        checked={formData.rating === item}
        disabled = {reviewIsSending}
      />
      <label
        htmlFor={`${item.toString()}-stars`}
        className='reviews__rating-label form__rating-label'
        title='perfect'
      >
        <svg className='form__star-image' width='37' height='33'>
          <use xlinkHref='#icon-star'></use>
        </svg>
      </label>
    </React.Fragment>
  )).reverse();

  return (
    <form
      onSubmit={handleFormSubmit}
      className='reviews__form form'
      action='#'
      method='post'
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>{ratingInputs }</div>
      <textarea
        onChange={handleFieldChange}
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        value={formData.review}
        placeholder='Tell how was your stay, what you like and what can be improved'
      >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={
            formData.review.length < ReviewLength.Min ||
            formData.review.length > ReviewLength.Max ||
            formData.rating === 0 || reviewIsSending
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
