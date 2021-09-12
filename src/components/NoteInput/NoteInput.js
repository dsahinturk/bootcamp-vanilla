import { useContext, useEffect, useState } from "react";
import { noteContext } from "../../context/NoteContext";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import {} from "./NoteInput.css"

const NoteInput = () => {
    const {saveNote, selectedNote} = useContext(noteContext)

    const [value, setValue] = useState("");
    
    useEffect(() => {
        if (selectedNote) {
            setValue(selectedNote.text)
        }
    }, [selectedNote])

    const evaluateNote = () => {
        if (value != null && value !== "") {
            saveNote(value)
            setValue("")
        }
    }

    return (
        <div className="note-input">
            <div className="input">
                <Input value={value} setValue={setValue} ></Input>
            </div>
            <div>
                <Button title={selectedNote ? "Update" : "Create"} onClick={() => evaluateNote()}></Button>
            </div>
        </div>
    )
}

export default NoteInput;