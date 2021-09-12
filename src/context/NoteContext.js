import React, { createContext, useState } from 'react';
import useCounter from '../hooks/useCounter';

export const noteContext = createContext({})

const NoteContext = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState();
    const {getId} = useCounter()

    const saveNote = (note) => {
        selectedNote ? updateNote(note) : createNote(note)
    }

    const createNote = (text) => {
        const newNotes = [...notes, {text: text, id: getId()}]
        setNotes(newNotes)
    }

    const updateNote = (text) => {
        const updatedNotes = notes.map(n => {
            if (n.id === selectedNote.id) {
                n.text = text
            }
            return n
        })
        setNotes(updatedNotes)
        setSelectedNote()
    }

    const deleteNote = (note) => {
        if (window.confirm("Notu silmek istediğinize emin misiniz?")) {
            const newNotes = notes.filter(n => n.id !== note.id)
            setNotes(newNotes)
        }
    }

    const selectNote = (id) => {
        setSelectedNote(notes.find(note => note.id === id))
    }

    return (
        <noteContext.Provider value={{
            notes,
            setNotes,
            deleteNote,
            selectNote,
            saveNote,
            selectedNote
        }}>
            {children}
        </noteContext.Provider>
    )

}

export default NoteContext