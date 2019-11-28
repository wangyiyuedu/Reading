const upperPartReducer = (prevState = true, action) => {
    let { type, payload } = action
    switch (type) {
        case "ShowUpperPart":
            return payload
        case "HideUpperPart":
            return payload

        default:
            return prevState

    }
}
export default upperPartReducer