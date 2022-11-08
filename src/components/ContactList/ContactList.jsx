import { useSelector } from 'react-redux';
import { List, ListItem, ListSpan, ListButton } from './ContactList.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'ContactsApi/contactsApi';
import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();

  return (
      <List>
        {data &&
          data
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, phone, id }) => (
              <ContactListItem
                name={name}
                phone={phone}
                key={id}
                id={id}
              />
            ))}
      </List>
  );
}
