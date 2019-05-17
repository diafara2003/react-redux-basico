import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/productosReducer.js';

const initialState = {
    productos: [
        {
            id: 1,
            name: 'pan',
            quality: '10',
            description: 'pan para hacer sandwish'
        }
        ,
        {
            id: 2,
            name: 'queso',
            quality: '45',
            description: 'queso para hacer sandwish'
        },
        {
            id: 3,
            name: 'jamon',
            quality: '89',
            description: 'jamon para hacer sandwish'
        }
    ]
};

const middware = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;