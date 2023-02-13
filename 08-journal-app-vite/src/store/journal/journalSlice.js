
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {

        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmplyNote: (state, { payload }) => {
            state.notes.push( payload );
            state.isSaving = false;

        },
        setActiveNote: (state, { payload }) => {
            state.active = payload;
        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }

    }
});
// Action creators are generated for each case reducer function
export const { addNewEmplyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions;