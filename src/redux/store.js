import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'ContactsApi/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { formReducer } from './formSlice';

export const store = configureStore({
  reducer: {
    contacts: formReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(contactsApi.middleware),
    
  },
);

setupListeners(store.dispatch)