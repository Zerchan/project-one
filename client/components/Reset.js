import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
    mutation RESET_MUTATION(
        $resetToken: String!,
        $password: String!,
        $confirmPassword: String!
    ){
        resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
            id
            email
            name
        }
    }
`;

export default props => {
    const initialState = {
        password: '',
        confirmPassword: ''
    };

    const [state, setState] = useState(initialState);
    const saveToState = (e) => { setState({...state, [e.target.name]: e.target.value}) }

  return (
    <Mutation
        mutation={RESET_MUTATION}
        variables={{
            ...state,
            resetToken: props.resetToken
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {
            (resetPassword, { error, loading, called }) => {
                return (
                    <form method="post" onSubmit={async (e) => {
                        e.preventDefault();
                        await resetPassword();
                        setState(initialState);
                    }}>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <h2>Reset your password</h2>
                            <Error error={error}/>
                            {/*!error && !loading && called && <p>Success! Check your email for a reset link</p>*/}
                            <label htmlFor="password">
                                Password
                                <input type="password" placeholder="password" name="password" value={state.password} onChange={saveToState}/>
                            </label>
                            <label htmlFor="confirmPassword">
                                Confirm Your Password
                                <input type="password" placeholder="Confirm Password" name="confirmPassword" value={state.confirmPassword} onChange={saveToState}/>
                            </label>
                            <button type="submit">Reset Password</button>
                        </fieldset>
                    </form>
                )
            }
        }
    </Mutation>
    )
}
