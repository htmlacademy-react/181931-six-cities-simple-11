import React, { useState, ChangeEvent } from 'react';

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const RATING_NUMBERS = ['1', '2', '3', '4', '5'];

  const handleFieldChange = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const ratingInputs = RATING_NUMBERS.map((item: string) => (
    <React.Fragment key={item}>
      <input
        onChange={handleFieldChange}
        className='form__rating-input visually-hidden'
        name='rating'
        value={item.toString()}
        id={`${item.toString()}-stars`}
        type='radio'
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
  ));

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
      <div className='reviews__rating-form form__rating'>{ratingInputs}</div>
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
