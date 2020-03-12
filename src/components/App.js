import React from "react";
import Form from "./Form"
import gql from "graphql-tag";
import {graphql} from "react-apollo"


const createAgent = gql`
            mutation createAgent (
                $firstName: String!,
                $lastName: String!,
                $email: String!,
                $zipCode: String!,
                $suite: String!,
                $streetAddress: String!,
                $city: String!,
                $state: String!,
                $phoneNumber: String!,
            ){
            createAgent(
                firstName: $firstName,
                lastName: $lastName,
                email: $email,
                zipCode: $zipCode,
                suite: $suite,
                streetAddress: $streetAddress,
                city: $city,
                state: $state,
                phoneNumber: $phoneNumber
                ){
                    firstName
                    lastName
                    email
                    zipCode
                    suite
                    streetAddress
                    city
                    state
                    phoneNumber

            }
       }`;

const App = (props) => {

    const onFormSubmit = (values) => {
        props.createAgent({variables: {...values}})
    };

    return (
        <Form onFormSubmit={onFormSubmit}/>
    )
};

export default graphql(createAgent, {name: "createAgent"})(App)