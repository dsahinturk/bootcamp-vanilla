import { useReducer } from "react"

const useCounter = () => {
    const [id, increment] = useReducer((state) => state + 1, 1)

    const getId = () => {
        increment()
        return id
    };

    return {getId}
}

export default useCounter