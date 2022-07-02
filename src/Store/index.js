import {createStore} from 'redux';

const mreducer = (state= {selectedMovieId: "1"}, action) => {
    if(action.type === "movieList"){
        return {
            selectedMovieId: action.movieId,
        }
    }
    return state;
}

const store = createStore(mreducer);

export default store;