import Button from "../../shared/Button/Button"
import {} from "./NoteList.css"

const NoteList = ({notes, deleteNote, selectNote}) => {
    return (
        <div className="note-list">
            {notes?.map(note => {
                return (
                    <div key={note.id} className="note">
                        <div className="note-data">
                            <span className="note-id">
                                {note.id + 1 + ")"}
                            </span>
                            <span className="note-text">
                                {note.text}
                            </span>
                        </div>
                        <div className="buttons">
                            <div className="edit-button">
                                <Button title="Edit" onClick={() => selectNote(note.id)}></Button>
                            </div>
                            <div className="delete-button">
                                <Button title="Delete" onClick={() => deleteNote(note)}></Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NoteList