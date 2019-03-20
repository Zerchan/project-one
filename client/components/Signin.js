import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION(
        $email: String!,
        $password: String!
    ){
        signin(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

const SignIn = () => {
    const initialState = {
        email: '',
        password: ''
    };

    const [state, setState] = useState(initialState);
    const saveToState = (e) => { setState({...state, [e.target.name]: e.target.value}) }

  return (
    <Mutation mutation={SIGNIN_MUTATION} variables={state} refetchQueries={ [{ query: CURRENT_USER_QUERY }] }>
        {
            (signin, { error, loading }) => {
                return (
                    <form method="post" onSubmit={async (e) => {
                        e.preventDefault();
                        await signin();
                        setState(initialState);
                    }}>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <h2>Sign into your account</h2>
                            <Error error={error}/>
                            <label htmlFor="email">
                                Email
                                <input type="email" placeholder="Email" name="email" value={state.email} onChange={saveToState}/>
                            </label>
                            <label htmlFor="password">
                                Password
                                <input type="password" placeholder="Password" name="password" value={state.password} onChange={saveToState}/>
                            </label>
                            <button type="submit">Sign in!</button>
                        </fieldset>
                    </form>
                )
            }
        }
    </Mutation>
    )
}

export default SignIn;
