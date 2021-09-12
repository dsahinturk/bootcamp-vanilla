import {} from "./Button.css"

const Button = ({ onClick, title }) => {
    return <span className="button">
        <button onClick={(e) => onClick(e)}>{title}</button>
    </span>
}

export default Button