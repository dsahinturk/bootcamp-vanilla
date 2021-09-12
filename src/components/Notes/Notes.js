import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";
import {} from "./Notes.css"

const Notes = () => {

    return (
        <div className="notes">
            <h1>NOT UYGULAMASI</h1>
            <NoteInput></NoteInput>
            <NoteList></NoteList>
        </div>
    )
}

export default Notes;