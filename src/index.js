import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import {ThemeProvider} from '@material-ui/styles'

import {theme} from './theme/theme'

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

// Redux
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';

import {Provider} from 'react-redux'

// import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/index.scss';

import reducer from './reducers/reducers';

const defaultState = {};

const store = createStore(
    reducer,
    defaultState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
   <Provider store={store} >
        <ThemeProvider theme={theme} >
            <MuiPickersUtilsProvider utils={MomentUtils} >
                <App />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
   </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
