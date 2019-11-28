const bannerdownReducer = (prevState = true, action) => {
    let { type, payload } = action
    switch (type) {
        case "ShowBannerDown":
            return payload
        case "HideBannerDown":
            return payload

        default:
            return prevState

    }
}
export default bannerdownReducer