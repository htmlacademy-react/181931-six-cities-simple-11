import { cities } from '../../mocks/cities';
import { CityType } from '../../types/city';
import { changeCityAction } from '../../store/offer-process/offer-process';
import cn from 'classnames';
import useAppDispatch from '../../hooks/useAppDispatch';

type CityMenuProps = {
  currentCity: CityType;
};

function Locations({ currentCity }: CityMenuProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeCity = (
    city: CityType
  ) => {
    dispatch(changeCityAction(city));
  };

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => (
        <li className='locations__item' key={`city-${city.name}`}>
          <span
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active': city === currentCity,
            })}
            style={city !== currentCity ? {cursor:'pointer'} : {}}
            onClick={()=>handleChangeCity(city)}
          >
            <span>{city.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Locations;
