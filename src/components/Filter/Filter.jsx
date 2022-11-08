import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel } from './Filter.styled';
import { filterContacts } from 'redux/formSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.query);
  console.log("filter", filter);

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </FilterLabel>
  );
};

export default Filter;
