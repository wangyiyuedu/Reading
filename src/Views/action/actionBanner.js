function show() {

    //大量逻辑
    return {
        type: "ShowBannerDown",
        payload: true
    }
}

function hide() {
    return {
        type: "HideBannerDown",
        payload: false
    }
}

export {show,hide}