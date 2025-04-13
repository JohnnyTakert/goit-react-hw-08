import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  // console.log('filter in filters:');
  // console.log(filter);

  const onFilter = item => {
    dispatch(setFilter(item));
  };

  return (
    <div className={css.SearchBox}>
      <p className={css.label}>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
