import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListSpan } from './ContactList.styled';
import { deleteContact } from 'redux/formSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const items = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {items.map(({ name, number, id }) => (
        <ListItem key={id}>
          {name}
          <ListSpan>:</ListSpan>
          {number}
          <button onClick={() => deleteButton(id)}>Delete</button>
        </ListItem>
      ))}
    </List>
  );
}
