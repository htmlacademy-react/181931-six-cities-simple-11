import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import { formatRatingToWidth } from '../../const';
import { MouseEvent } from 'react';
import cn from 'classnames';

type CardProps = {
  offer: Offer;
  onMouseCardEnter: (id: number) => void;
  onMouseCardLeave: () => void;
  isActive: boolean;
  cardClassName:string;
};

function OfferCard({offer,
  onMouseCardEnter,
  onMouseCardLeave,
  isActive,
  cardClassName} : CardProps): JSX.Element {

  return (
    <article className={cn('place-card', `${cardClassName}__card`, { active: isActive })}
      id={`offer-${offer.id}`}
      onMouseEnter={(event: MouseEvent<HTMLElement>) =>
        onMouseCardEnter && onMouseCardEnter(offer.id)}
      onMouseLeave={(event: MouseEvent<HTMLElement>) =>
        onMouseCardLeave && onMouseCardLeave()}
    >
      {offer.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={generatePath(AppRoute.Room, { id: String(offer.id) })}>
          <img
            className='place-card__image'
            src={offer.images[0]}
            width='260'
            height='200'
            alt='Place'
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
