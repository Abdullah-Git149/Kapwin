const initState = {
    videolink: null,
    trimVideoLink: null
}

const VideoReducer = (state = initState, action) => {
    if (action.type === "SET_VIDEO") {
        return { ...state, videolink: action.payload }
    } else if (action.type === "SET_TRIM_VIDEO") {
        return { ...state, trimVideoLink: action.payload }
    } else {

        return state
    }
}

export default VideoReducer