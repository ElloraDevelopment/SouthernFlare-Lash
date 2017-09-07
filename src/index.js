import React from 'react';
import ReactDOM from "react-dom";

import "./index.css";
import AuthComponent from "./authentication/auth.js";
<<<<<<< HEAD
import Home from "./landing/home.js";
import Contact from "./contact.js";
=======
import CmsContainer from "./cms/cms.js";
>>>>>>> cms

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
<<<<<<< HEAD
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </BrowserRouter>
            
=======
                <CmsContainer />
                <Footer />
>>>>>>> cms
            </div>
        );
    }
}

<<<<<<< HEAD

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
=======
//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
>>>>>>> cms
