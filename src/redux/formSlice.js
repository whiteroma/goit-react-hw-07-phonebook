import { createSlice } from '@reduxjs/toolkit';

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
        name: action.payload.name,
        number: action.payload.number,
        id: action.payload.id
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
