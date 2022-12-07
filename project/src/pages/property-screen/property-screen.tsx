import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import OfferCard from '../../components/offer-card/offer-card';
import { formatRatingToWidth, AuthorizationStatus } from '../../const';
import Map from '../../components/map/map';
import useAppSelector from '../../hooks/useAppSelector';
import {
  fetchOfferAction,
  fetchOfferReviewsAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions';
import useAppDispatch from '../../hooks/useAppDispatch';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Loader from '../../components/loader/loader';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const [activeOfferId, setActiveOfferId] = useState<number | null>(
    Number(params.id)
  );
  const currentOfferId = Number(params.id);
  const currentCity = useAppSelector((state) => state.city);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const offer = useAppSelector((state) => state.offer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOfferAction(currentOfferId));
    dispatch(fetchOffersNearbyAction(currentOfferId));
    dispatch(fetchOfferReviewsAction(currentOfferId));
  }, [currentOfferId, dispatch]);

  const offersNearby = useAppSelector((state) => state.offersNearby);
  let offersNearbyWithCurrent = null;
  if (offersNearby !== null && offer !== null) {
    offersNearbyWithCurrent = [...offersNearby, offer];
  }

  const reviewsForOffer = useAppSelector((state) => state.reviewsForOffer);

  if (!offer) {
    return <Loader />;
  }

  return (
    <main className='page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {offer.images.map((item: string) => (
              <div key={item} className='property__image-wrapper'>
                <img className='property__image' src={item} alt='' />
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
                {offer.goods.map((item: string) => (
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
              {reviewsForOffer && reviewsForOffer.length > 0 ? (
                <ReviewsList reviews={reviewsForOffer} />
              ) : (
                ''
              )}
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <ReviewsForm currentOfferId={currentOfferId} />
              ) : null}
            </section>
          </div>
        </div>
        <section className='property__map map'>
          <Map
            city={currentCity}
            offers={offersNearbyWithCurrent}
            activeOfferId={currentOfferId}
            mapClassName='property__map'
          />
        </section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <div className='near-places__list places__list'>
            {offersNearby?.map((item) => (
              <OfferCard
                key={item.id}
                offer={item}
                onMouseCardEnter={() => setActiveOfferId(item.id)}
                onMouseCardLeave={() => setActiveOfferId(null)}
                isActive={item.id === activeOfferId}
                cardClassName='near-places'
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyScreen;
