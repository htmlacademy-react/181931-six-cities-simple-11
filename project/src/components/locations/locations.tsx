import React from 'react';

function LocationsList(): JSX.Element {
  const locations = [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf',
  ];
  const locationsItems = locations.map((location) => (
    <li className='locations__item' key={location}>
      <a className='locations__item-link tabs__item' href='/'>
        <span>{location}</span>
      </a>
    </li>
  ));

  return <ul className='locations__list tabs__list'>{locationsItems}</ul>;
}

export default LocationsList;
