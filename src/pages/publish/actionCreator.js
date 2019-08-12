import { GETFOCUS, VALUE, IMG, VOICE, LOCALID } from './actionTypes'

const getFocus = (data) => {
    return {
        type: GETFOCUS,
        data
    }
}


const value = (data) => {
    return {
        type: VALUE,
        data
    }
}

const img = (data) => {
    return {
        type: IMG,
        data
    }
}

const voice = (data) => {
    return {
        type: VOICE,
        data
    }
}

const localid = (data) => {
    return {
        type: LOCALID,
        data
    }
}


export {
    getFocus,
    value,
    img,
    voice,
    localid
}