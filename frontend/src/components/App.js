import React from "react";
import ReactDOM from "react-dom";
import Login from "./login/login";
import Registration from "./registration/registration"

import {Route, Switch, BrowserRouter} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/front/login" component={Login}/>
            <Route path="/front/register" component={Registration}/>
        </Switch>
    </BrowserRouter>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;