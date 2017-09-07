import React from 'react';
import ReactDOM from "react-dom";

import "./index.css";
import AuthComponent from "./authentication/auth.js";
import Home from "./landing/home.js";
import Contact from "./contact.js";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>

                <AuthComponent />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </BrowserRouter>
            
            </div>
        );
    }
}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
