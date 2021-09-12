
const useCounter = () => {

    const increment = () => {
        localStorage.setItem("id", getLSId() + 1)
    }

    const getLSId = () => {
        if (localStorage.getItem("id")) {
            return Number(localStorage.getItem("id"))
        }
    }

    const setLSId = (id) => {
        localStorage.setItem("id", id)
    }

    const getId = () => {
        if (getLSId() == null) {
            setLSId(1)
            return getLSId()
        } else {
            increment()
            return getLSId()
        }
    };

    return {getId}
}

export default useCounter