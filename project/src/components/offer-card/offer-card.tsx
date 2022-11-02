import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import { formatRatingToWidth } from '../../const';

type CardProps = {
  offer: Offer;
};

function OfferCard({ offer }: CardProps): JSX.Element {
  return (
    <article className='cities__card place-card'>
      {offer.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={generatePath(AppRoute.Room, { id: String(offer.id) })}>
          <img
            className='place-card__image'
            src='img/apartment-01.jpg'
            width='260'
            height='200'
            alt='Place image'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&/47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: formatRatingToWidth(offer.rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={generatePath(AppRoute.Room, { id: String(offer.id) })}>
            {offer.title}
          </Link>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
