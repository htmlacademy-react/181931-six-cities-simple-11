import { useParams } from 'react-router-dom';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import ReviewCard from '../../components/review-card/review-card';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import OfferCard from '../../components/offer-card/offer-card';
import { formatRatingToWidth } from '../../const';

type PropertyPageProps = {
  offers: Offers;
  reviews: Reviews;
};

function PropertyScreen({ offers, reviews }: PropertyPageProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === Number(params.id));
  const reviewsArray = [];
  reviewsArray.push(
    reviews.find((item) => item.hotelId === Number(params.id))
  );

  return (
    <main className='page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {offer?.images.map((item) => (
              <div key={item} className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={item}
                  alt='Photo studio'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            {offer?.isPremium && (
              <div className='property__mark'>
                <span>Premium</span>
              </div>
            )}
            <div className='property__name-wrapper'>
              <h1 className='property__name'>{offer?.title}</h1>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                {/* Добавил as number потому что была ошибка
                TS2345: Argument of type 'number | undefined' is not assignable
                to parameter of type 'number'. Type 'undefined' is not
                assignable to type 'number'. */}
                <span
                  style={{
                    width: formatRatingToWidth(offer?.rating as number),
                  }}
                >
                </span>
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>
                {offer?.rating}
              </span>
            </div>
            <ul className='property__features'>
              <li className='property__feature property__feature--entire'>
                {offer?.type}
              </li>
              <li className='property__feature property__feature--bedrooms'>
                {offer?.bedrooms} Bedrooms
              </li>
              <li className='property__feature property__feature--adults'>
                Max {offer?.maxAdults} adults
              </li>
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>&euro;{offer?.price}</b>
              <span className='property__price-text'>&nbsp;night</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {offer?.goods.map((item) => (
                  <li key={item} className='property__inside-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='property__host'>
              <h2 className='property__host-title'>Meet the host</h2>
              <div className='property__host-user user'>
                <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                  <img
                    className='property__avatar user__avatar'
                    src={offer?.host.avatar}
                    width='74'
                    height='74'
                    alt='Host avatar'
                  />
                </div>
                <span className='property__user-name'>
                  {offer?.host.avatar}
                </span>
                {offer?.host.isPro ?? (
                  <span className='property__user-status'>Pro</span>
                )}
              </div>
              <div className='property__description'>
                <p className='property__text'>{offer?.description}</p>
              </div>
            </div>
            <section className='property__reviews reviews'>
              <h2 className='reviews__title'>
                Reviews &middot;{' '}
                <span className='reviews__amount'>{reviewsArray.length}</span>
              </h2>
              <ul className='reviews__list'>
                {reviews.map((item) => (
                  <ReviewCard key={item.id} review={item} />
                ))}
              </ul>

              <ReviewsForm />
            </section>
          </div>
        </div>
        <section className='property__map map'></section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <div className='near-places__list places__list'>
            {offers.slice(0, 3).map((item) => (
              <OfferCard key={item.id} offer={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyScreen;
