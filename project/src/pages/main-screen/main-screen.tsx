import React from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import LocationsList from '../../components/locations/locations';
import Map from '../../components/map/map';
import useAppSelector from '../../hooks/useAppSelector';
import cn from 'classnames';
import { useState } from 'react';

function MainScreen(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === currentCity.name
  );

  const handleMouseEnter = (offerId: number | null) => {
    setActiveCardId(offerId);
  };
  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <main
      className={cn('page page--gray page--main',{'page__main--index-empty':!currentCityOffers.length})}
    >
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <LocationsList currentCity={currentCity} />
        </section>
      </div>
      <div className='cities'>
        {offers.length > 1 && (
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {currentCityOffers.length} places to stay in {currentCity.name}
              </b>
              <form className='places__sorting' action='/' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='/icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className='cities__places-list places__list tabs__content'>
                {currentCityOffers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} onMouseCardEnter={handleMouseEnter} onMouseCardLeave={handleMouseLeave} activeCardId={activeCardId} cardClassName='cities'/>
                ))}
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map city={currentCity} offers={currentCityOffers} activeOfferId={activeCardId} mapClassName='cities__map'/>
              </section>
            </div>
          </div>
        )}
        {offers.length < 1 && (
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
