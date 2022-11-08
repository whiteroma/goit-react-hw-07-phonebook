import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const formSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});


export const { addContact, deleteContact, filterContacts } = formSlice.actions;
export const formReducer = formSlice.reducer;
