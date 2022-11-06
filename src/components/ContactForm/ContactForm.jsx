import { nanoid } from 'nanoid';
import React from 'react';
import { FormContainer } from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/formSlice';

const initialValues = {
  name: '',
  number: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  number: Yup.string().required('Please enter a number'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    const addedName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(values.name.toLowerCase());
    if (addedName) {
      alert(`${values.name} is already in a list`);
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormContainer>
        <label htmlFor={nameId}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor={numberId}>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and should start with +"
            required
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
