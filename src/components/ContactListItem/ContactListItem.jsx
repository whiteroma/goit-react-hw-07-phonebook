import { Oval } from 'react-loader-spinner';
import { ListItem, ListSpan, ListButton } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'ContactsApi/contactsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading, isSuccess, isError }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`${name} removed from your contacts`);
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name])

  return (
    <ListItem key={id}>
      <ListSpan>{name}:</ListSpan>
      {phone}
      {isLoading ? (
        <Oval
          height={12}
          width={12}
          color="blue"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="blue"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <ListButton onClick={() => deleteContact(id)}>Delete</ListButton>
      )}
    </ListItem>
  );
}
