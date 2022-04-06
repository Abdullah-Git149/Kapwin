const initState = {
    videolink: null
}

const VideoReducer = (state = initState, action) => {
    if (action.type === "SET_VIDEO") {
        return { ...state, videolink: action.payload }
    } else {

        return state
    }
}

export default VideoReducer