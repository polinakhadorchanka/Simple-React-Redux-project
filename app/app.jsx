import {createStore} from "redux";

let ReactDOM = require('react-dom');
let React = require('react');
let VacancyList = require('./components/vacancy.jsx');
let Provider = require("react-redux").Provider;
let reducers = require("./reducer.jsx");

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

let store = createStore(reducers);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={VacancyList} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("container")
);