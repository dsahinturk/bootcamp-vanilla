import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { noteContext } from "../../context/NoteContext";
import {} from "./NoteDetail.css"

const NoteDetail = () => {
    const [note, setNote] = useState();
    const {id} = useParams();
    const history = useHistory();
    const {notes} = useContext(noteContext);

    useEffect(() => {
        const note = getNoteById()
        setNote(note)
    }, [id])

    const getNoteById = () => {
        const note = notes.find(note => note.id == id)
        if (!note) {
            window.alert("Not bulunamadı!")
            history.push("/")
        }
        return note;
    }

    return (
        <div className="note-detail">
            <h1>NOTE DETAIL OF {note?.id}</h1>
            <div>{note?.text}</div>
        </div>
    )
}

export default NoteDetail