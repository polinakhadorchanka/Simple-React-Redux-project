import {createStore} from "redux";

let ReactDOM = require('react-dom');
let React = require('react');
let Vacancy = require('./components/vacancy.jsx');
let Provider = require("react-redux").Provider;
let reducers = require("./reducer.jsx");

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

window.localStorage.clear();

let store = window.localStorage.getItem('store') ?
    createStore(reducers, JSON.parse(window.localStorage.getItem('store'))) :
    createStore(reducers);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Vacancy.VacList} />
                <Route exact path="/str" children={()=><h2>sfgfhmg</h2>}/>
                <Route exact path="/:company_name-:position" component={Vacancy.Vac} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("container")
);