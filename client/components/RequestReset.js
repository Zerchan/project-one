import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
    mutation REQUEST_RESET_MUTATION(
        $email: String!
    ){
        requestReset(email: $email) {
            message
        }
    }
`;

export default () => {
    const initialState = {
        email: ''
    };

    const [state, setState] = useState(initialState);
    const saveToState = (e) => { setState({...state, [e.target.name]: e.target.value}) }

  return (
    <Mutation mutation={REQUEST_RESET_MUTATION} variables={state}>
        {
            (requestReset, { error, loading, called }) => {
                return (
                    <form method="post" onSubmit={async (e) => {
                        e.preventDefault();
                        await requestReset();
                        setState(initialState);
                    }}>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <h2>Request a password reset</h2>
                            <Error error={error}/>
                            {!error && !loading && called && <p>Success! Check your email for a reset link</p>}
                            <label htmlFor="email">
                                Email
                                <input type="email" placeholder="Email" name="email" value={state.email} onChange={saveToState}/>
                            </label>
                            <button type="submit">Request Reset</button>
                        </fieldset>
                    </form>
                )
            }
        }
    </Mutation>
    )
}
