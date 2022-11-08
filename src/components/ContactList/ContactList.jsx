import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListSpan } from './ContactList.styled';
// import { addContact, deleteContact } from 'redux/formSlice';
import { useFetchContactsQuery, useDeleteContactMutation } from 'ContactsApi/contactsApi';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation()
  
  // const items = data.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  console.log("data", data);
//  console.log("items", items);

  // const deleteButton = contactId => {
  //   deleteContact(contactId);
  // };

  return (
    <List>
      {data && data.map(({ name, phone, id }) => (
        <ListItem key={id}>
          {name}
          <ListSpan>:</ListSpan>
          {phone}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </ListItem>
      ))}
    </List>
  );
}
