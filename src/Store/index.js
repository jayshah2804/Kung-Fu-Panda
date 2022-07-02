import {createStore} from 'redux';

const mreducer = (state= {selectedMovieId: "m1"}, action) => {
    if(action.type === "movieList"){
        return {
            selectedMovieId: action.movieId,
        }
    }
    return state;
}

const store = createStore(mreducer);

export default store;