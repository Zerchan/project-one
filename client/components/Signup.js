import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION(
        $name: String!,
        $email: String!,
        $password: String!
    ){
        signup(name: $name, email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

export default () => {
    const initialState = {
        name: '',
        email: '',
        password: ''
    };

    const [state, setState] = useState(initialState);
    const saveToState = (e) => { setState({...state, [e.target.name]: e.target.value}) }

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={state} refetchQueries={ [{ query: CURRENT_USER_QUERY }] }>
        {
            (signup, { error, loading }) => {
                return (
                    <form method="post" onSubmit={async (e) => {
                        e.preventDefault();
                        await signup();
                        setState(initialState);
                    }}>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <h2>Sign Up for an Account</h2>
                            <Error error={error}/>
                            <label htmlFor="name">
                                Name
                                <input type="text" placeholder="Name" name="name" value={state.name} onChange={saveToState}/>
                            </label>
                            <label htmlFor="email">
                                Email
                                <input type="email" placeholder="Email" name="email" value={state.email} onChange={saveToState}/>
                            </label>
                            <label htmlFor="password">
                                Password
                                <input type="password" placeholder="Password" name="password" value={state.password} onChange={saveToState}/>
                            </label>
                            <button type="submit">Sign up!</button>
                        </fieldset>
                    </form>
                )
            }
        }
    </Mutation>
    )
}