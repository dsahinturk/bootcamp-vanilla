import {} from "./Input.css"

const Input = ({value, setValue}) => {
    return <textarea placeholder="Type Something" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
}

export default Input