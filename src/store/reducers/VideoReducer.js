const initState = {
    videolink: null,
    trimVideoLink: null,
    trimTime: []
}

const VideoReducer = (state = initState, action) => {
    if (action.type === "SET_VIDEO") {
        return { ...state, videolink: action.payload }
    } else if (action.type === "SET_TRIM_VIDEO") {
        return { ...state, trimVideoLink: action.payload }
    } else if (action.type === "SAVE_TIME") {
        return { ...state, trimTime: action.payload }
    } else {

        return state
    }
}

export default VideoReducer