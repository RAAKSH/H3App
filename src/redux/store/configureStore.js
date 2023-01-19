import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AssetReducer } from '../Reducers/AssetReducer';


export default function configureStore(initialState) {

    const enhancer = applyMiddleware(thunk)

    return createStore(
        AssetReducer,
        initialState,
        enhancer
    );
}


