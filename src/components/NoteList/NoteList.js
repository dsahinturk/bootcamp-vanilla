import { useContext } from "react"
import { Link } from "react-router-dom"
import { noteContext } from "../../context/NoteContext"
import Button from "../../shared/Button/Button"
import {} from "./NoteList.css"

const NoteList = () => {
    const {notes, deleteNote, selectNote} = useContext(noteContext)

    const _selectNote = (e, id) => {
        e.preventDefault();
        selectNote(id)
    }

    const _deleteNote = (e, note) => {
        e.preventDefault();
        deleteNote(note)
    }

    return (
        <div className="note-list">
            {notes?.map(note => {
                return (
                    <Link to={"/note/" + note.id} key={note.id} className="note-link">
                        <div className="note">
                            <span className="note-id">
                                {note.id + ")"}
                            </span>
                            <span className="note-text">
                                {note.text}
                            </span>
                            <div className="note-data">
                            </div>
                            <div className="buttons">
                                <div className="edit-button">
                                    <Button title="Edit" onClick={(event) => _selectNote(event, note.id)}></Button>
                                </div>
                                <div className="delete-button">
                                    <Button title="Delete" onClick={(event) => _deleteNote(event, note)}></Button>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default NoteList