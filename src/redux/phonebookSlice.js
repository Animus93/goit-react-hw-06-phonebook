import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 'id-1', name: 'PPC-Specialist', number: '459-12-56' },
  { id: 'id-2', name: 'Tanya', number: '443-89-12' },
  { id: 'id-3', name: 'Volodya', number: '645-17-79' },
  { id: 'id-4', name: 'Sasha', number: '227-91-26' },
  { id: 'id-5', name: 'Pavlo', number: '324-11-90' },
  { id: 'id-6', name: 'Ira', number: '156-24-33' },
  { id: 'id-7', name: 'Sister', number: '124-54-31' },
];

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    'addContact': {
      reducer: (state, action) => {
       return [...state, action.payload]
      },
      prepare: (action) => {
        const id = nanoid()
        return {payload: {id,...action}}
      }
    },
    'deleteContact': (state, action) => {
     return state.filter(contact =>  contact.id !== action.payload);
    }
  }
});

export const {addContact, deleteContact} = phonebookSlice.actions

export default phonebookSlice.reducer

