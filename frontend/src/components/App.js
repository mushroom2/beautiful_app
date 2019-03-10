import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import FormPage from './login'
import Login from "./login/login";
//import Table from "./Table";
const App = () => (
    <div>
        <Login/>
    </div>
//  <DataProvider endpoint="api/lead/"
//                render={data => <Table data={data} />} />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;