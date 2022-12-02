import { useState } from 'react';
import { SortOptions } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import cn from 'classnames';
import { sortOffersByAction } from '../../store/action';

function Sort(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortOffersBy = useAppSelector((state) => state.sortOffersBy);
  const [isSortOpen, setSortOpen] = useState(false);

  return (
    <form className='places__sorting' action='#' method='get' onClick={()=>setSortOpen(!isSortOpen)}>
      <span className='places__sorting-caption'>Sort by&nbsp;</span>
      <span className='places__sorting-type' tabIndex={0}>
        {activeSortOffersBy}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isSortOpen,
        })}
      >
        {Object.values(SortOptions).map((item) => (
          <li
            className={cn('places__option', {
              'places__option--active': item === activeSortOffersBy,
            })}
            tabIndex={0}
            key={item}
            onClick={() => {
              setSortOpen(!isSortOpen);
              dispatch(sortOffersByAction(item));
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
