import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const formSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      items: [],
      isLoading: false,
      error: null
    ],
    filter: ""
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContacts(state, action) {
      state.query = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['query'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  formSlice.reducer
);
export const { addContact, deleteContact, filterContacts } = formSlice.actions;
export const formReducer = formSlice.reducer;
