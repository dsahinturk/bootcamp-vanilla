import {} from "./Button.css"

const Button = ({ onClick, title }) => {
    return <span className="button">
        <button onClick={() => onClick()}>{title}</button>
    </span>
}

export default Button