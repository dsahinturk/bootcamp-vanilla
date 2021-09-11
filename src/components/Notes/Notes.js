import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";
import {} from "./Notes.css"

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState();
    const {getId} = useCounter()

    const saveNote = (note) => {
        selectedNote ? updateNote(note) : createNote(note)
    }
    
    const createNote = (text) => {
        setNotes([...notes, {text: text, id: getId()}])
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
            setNotes(newNotes);
        }
    }

    const selectNote = (id) => {
        setSelectedNote(notes.find(note => note.id === id))
    }

    return (
        <div className="notes">
            <h1>NOT UYGULAMASI</h1>
            <NoteInput selectedNote={selectedNote} saveNote={(note) => saveNote(note)}></NoteInput>
            <NoteList notes={notes} deleteNote={(note) => deleteNote(note)} selectNote={(id) => selectNote(id)}></NoteList>
        </div>
    )
}

export default Notes;