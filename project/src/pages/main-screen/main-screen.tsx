import React from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import LocationsList from '../../components/locations/locations';
import Map from '../../components/map/map';
import useAppSelector from '../../hooks/useAppSelector';
import cn from 'classnames';
import { useState } from 'react';
import Sort from '../../components/sort/sort';
import Loader from '../../components/loader/loader';
import { getCity, getCurrentCityOffers, getCurrentCitySortedOffers, getIsOffersLoading } from '../../store/offer-process/selectors';

function MainScreen(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const currentCity = useAppSelector(getCity);

  const currentCityOffers = useAppSelector(getCurrentCitySortedOffers);

  const offers = useAppSelector(getCurrentCityOffers);
  const handleMouseEnter = (offerId: number | null) => {
    setActiveCardId(offerId);
  };
  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  const isOffersDataLoading = useAppSelector(getIsOffersLoading);

  return (
    <main
      className={cn('page page--gray page--main', {
        'page__main--index-empty': !currentCityOffers.length,
      })}
    >
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <LocationsList currentCity={currentCity} />
        </section>
      </div>
      <div className='cities'>
        {isOffersDataLoading && <Loader />}
        {offers.length > 1 ? (
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {currentCityOffers.length} places to stay in {currentCity.name}
              </b>
              {currentCityOffers.length > 0 && <Sort />}
              <div className='cities__places-list places__list tabs__content'>
                {currentCityOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    onMouseCardEnter={handleMouseEnter}
                    onMouseCardLeave={handleMouseLeave}
                    isActive={offer.id === activeCardId}
                    cardClassName='cities'
                  />
                ))}
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  city={currentCity}
                  offers={currentCityOffers}
                  activeOfferId={activeCardId}
                  mapClassName='cities__map'
                />
              </section>
            </div>
          </div>
        ) : (
          <div className='cities__places-container cities__places-container--empty container'>
            <section className='cities__no-places'>
              <div className='cities__status-wrapper tabs__content'>
                <b className='cities__status'>No places to stay available</b>
                <p className='cities__status-description'>
                  We could not find any property available at the moment in
                  Dusseldorf
                </p>
              </div>
            </section>
            <div className='cities__right-section'></div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MainScreen;
