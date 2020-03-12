import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>

    ,document.querySelector("#root"));