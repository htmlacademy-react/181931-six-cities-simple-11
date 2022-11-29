import React from 'react';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { cities } from '../../mocks/cities';
import { CityType } from '../../types/city';
import { changeCityAction } from '../../store/action';
import { AppRoute } from '../../const';
import cn from 'classnames';
import useAppDispatch from '../../hooks/useAppDispatch';

type CityMenuProps = {
  currentCity: CityType;
};

function LocationsList({ currentCity }: CityMenuProps): JSX.Element {
  // const LOCATIONS = [
  //   'Paris',
  //   'Cologne',
  //   'Brussels',
  //   'Amsterdam',
  //   'Hamburg',
  //   'Dusseldorf',
  // ];
  const dispatch = useAppDispatch();

  const handleChangeCity = (
    event: MouseEvent<HTMLAnchorElement>,
    city: CityType
  ) => {
    event.preventDefault();
    dispatch(changeCityAction(city));
  };
  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => (
        <li className='locations__item' key={`city-${city.name}`}>
          <Link
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active': city === currentCity,
            })}
            to={AppRoute.Main}
            onClick={(e) => handleChangeCity(e, city)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  // const locationsItems = LOCATIONS.map((location) => (
  //   <li className='locations__item' key={location}>
  //     <NavLink className='locations__item-link tabs__item' to='/'>
  //       <span>{location}</span>
  //     </NavLink>
  //   </li>
  // ));

  // return <ul className='locations__list tabs__list'>{locationsItems}</ul>;
}

export default LocationsList;
