import { render, screen } from "@testing-library/react";
import {MovieDetail} from './MovieDetail';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Movie Detail Component', () => {
    const initialState = { movieId: "m1" };
    const mockStore = configureStore();
    let store;

    it('gives clicked movieId', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <MovieDetail />
            </Provider>
        );
        const element = screen.findAllByRole('img');
        expect(element).not.toBeNull();
    });
});