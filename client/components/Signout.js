import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signout {
            message
        }
    }
`;

export default () => {
  return (
    <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {(signout) => (<span onClick={signout}>Sign Out</span>)}
    </Mutation>
  )
}
