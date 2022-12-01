import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import ReviewCard from '../../components/review-card/review-card';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import OfferCard from '../../components/offer-card/offer-card';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { formatRatingToWidth } from '../../const';
import Map from '../../components/map/map';
import useAppSelector from '../../hooks/useAppSelector';

type PropertyPageProps = {
  reviews: Reviews;
};

function PropertyScreen({
  reviews}: PropertyPageProps): JSX.Element {
  const params = useParams();
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const [activeOfferId, setActiveOfferId] = useState<number | null>(Number(params.id));

  const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const offer: Offer | undefined = currentCityOffers.find(
    (item) => item.id === Number(params.id)
  );
  const reviewsForOffer = reviews.filter((it) => it.id === Number(params.id));

  if (!offer) {
    return <NotFoundScreen />;
  }

  const offersNearby = currentCityOffers
    .filter((item) => item.id !== Number(params.id))
    .slice(0, 3);
  const offersNearbyWithCurrent = offersNearby.concat(offer);

  return (
    <main className='page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {offer.images.map((item: string) => (
              <div key={item} className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={item}
                  alt=''
                />
              </div>
            ))}
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            {offer.isPremium && (
              <div className='property__mark'>
                <span>Premium</span>
              </div>
            )}
            <div className='property__name-wrapper'>
              <h1 className='property__name'>{offer.title}</h1>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                <span
                  style={{
                    width: formatRatingToWidth(offer.rating),
                  }}
                >
                </span>
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>
                {offer.rating}
              </span>
            </div>
            <ul className='property__features'>
              <li className='property__feature property__feature--entire'>
                {offer.type}
              </li>
              <li className='property__feature property__feature--bedrooms'>
                {offer.bedrooms} Bedrooms
              </li>
              <li className='property__feature property__feature--adults'>
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>&euro; {offer.price}</b>
              <span className='property__price-text'>&nbsp;night</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {offer.goods.map((item:string) => (
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
                  {offer.host.avatar && (
                    <img
                      className='property__avatar user__avatar'
                      src={offer.host.avatar}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  )}
                </div>
                <span className='property__user-name'>{offer.host.name}</span>
                {offer.host.isPro ?? (
                  <span className='property__user-status'>Pro</span>
                )}
              </div>
              <div className='property__description'>
                <p className='property__text'>{offer.description}</p>
              </div>
            </div>
            <section className='property__reviews reviews'>
              <h2 className='reviews__title'>
                Reviews &middot;{' '}
                <span className='reviews__amount'>
                  {reviewsForOffer.length}
                </span>
              </h2>
              <ul className='reviews__list'>
                {reviewsForOffer.map((item) => (
                  <ReviewCard
                    key={item.id}
                    review={item}
                  />
                ))}
              </ul>

              <ReviewsForm />
            </section>
          </div>
        </div>
        <section className='property__map map'>
          <Map city={currentCity}
            offers={offersNearbyWithCurrent}
            activeOfferId={Number(params.id)}
            mapClassName="property__map"
          />
        </section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <div className='near-places__list places__list'>
            {offersNearby.map((item) => (
              <OfferCard
                key={item.id}
                offer={item}
                onMouseCardEnter={() => setActiveOfferId(item.id)}
                onMouseCardLeave={()=> setActiveOfferId(null)}
                isActive={item.id === activeOfferId}
                cardClassName="near-places"
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyScreen;
