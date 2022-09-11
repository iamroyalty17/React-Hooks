import { LIKE_MOVIE, UNLIKE_MOVIE } from "../Constant/action-types"

const likeMovie = () => {
    return {
        type: LIKE_MOVIE,
        payload: 0
    }
}

const unLikeMovie = () => {
    return {
        type: UNLIKE_MOVIE,
        payload: 0
    }
}

const data = {
    likeMovie,
    unLikeMovie
}
export default data
