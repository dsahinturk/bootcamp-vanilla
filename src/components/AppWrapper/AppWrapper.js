import NoteContext from "../../context/NoteContext";



const AppWrapper = ({children}) => {
    return (
        <NoteContext>{children}</NoteContext>
    )
}

export default AppWrapper