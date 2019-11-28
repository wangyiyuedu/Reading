function xianshi() {

    return {
        type: "ShowUpperPart",
        payload: true
    }
}

function yincang () {
    return {
        type: "HideUpperPart",
        payload: false
    }
}

export {xianshi,yincang}