

import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationsList(): JSX.Element {
  const LOCATIONS = [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf',
  ];

  const locationsItems = LOCATIONS.map((location) => (
    <li className='locations__item' key={location}>
      <NavLink className='locations__item-link tabs__item' to='/'>
        <span>{location}</span>
      </NavLink>
    </li>
  ));

  return <ul className='locations__list tabs__list'>{locationsItems}</ul>;
}

export default LocationsList;
