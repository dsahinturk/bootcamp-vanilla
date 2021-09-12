import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {} from "./NoteDetail.css"

const NoteDetail = () => {
    const [note, setNote] = useState();
    const {id} = useParams()

    useEffect(() => {
        const note = getNoteById()
        setNote(note)
    }, [])

    const getNoteById = () => {
        const notes = JSON.parse(localStorage.getItem("notes"))
        const note = notes.find(note => note.id == id)
        return note;
    }

    return (
        <div className="note-detail">
            {note && <>
                <h1>NOTE DETAIL OF {note.id}</h1>
                <div>{note?.text}</div>
            </>}
        </div>
    )
}

export default NoteDetail