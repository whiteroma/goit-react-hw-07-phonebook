import { useSelector } from 'react-redux';
import { React } from 'react';
import { useAddContactMutation } from 'ContactsApi/contactsApi';
import { List } from './ContactList.styled';
import { useFetchContactsQuery } from 'ContactsApi/contactsApi';
import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();
  const [{ isSuccess }] = useAddContactMutation();
  console.log('isSuccess List', isSuccess);

  return (
    <List>
      {data &&
        data
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ name, phone, id }) => (
            <ContactListItem name={name} phone={phone} key={id} id={id} />
          ))}
    </List>
  );
}
