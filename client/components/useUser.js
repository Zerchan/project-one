// import { useState, useEffect } from 'react';
// import { Query } from 'react-apollo';
import { useQuery } from 'react-apollo-hooks';
import { gql } from "apollo-boost";
// import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
    query {
        me {
            id
            email
            name
            permissions
        }
    }
`;

function useUser() {
    const { data, error, loading } = useQuery(CURRENT_USER_QUERY);
    return { data: data.me, error, loading };
}

export default useUser;