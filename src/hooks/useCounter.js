import { useReducer } from "react"

const useCounter = () => {
    const [id, increment] = useReducer((state) => state + 1, 0)

    const getId = () => {
        increment()
        return id
    };

    return {getId}
}

export default useCounter