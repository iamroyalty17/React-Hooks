import {
    LIKE_MOVIE, UNLIKE_MOVIE
} from '../Constant/action-types';

// const initialState = {
//     likedMovies: 0
// }

const movieReducer = (state = 0, { type, payload}) => {
    switch (type) {
        case LIKE_MOVIE: 
        return state + 1
       case UNLIKE_MOVIE:
        return state - 1
        default: 
            return state
    }
}

export default movieReducer;