import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/Reducers';

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // options like actionSanitizer, stateSanitizer
            }) : compose;

    // Local
    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
    );

    //Prod
    // const enhancer = applyMiddleware(thunk);

    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}