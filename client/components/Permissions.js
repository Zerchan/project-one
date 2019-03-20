import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import Error from './ErrorMessage';

const possiblePermissions = ['ADMIN', 'USER', 'PERMISSIONUPDATE'];

const UPDATE_PERMISSIONS_MUTATION = gql`
    mutation UPDATE_PERMISSIONS_MUTATION($userId: ID!, $permissions: [Permission]) {
        updatePermissions(userId: $userId, permissions: $permissions){
            id
            name
            email
            permissions
        }
    }
`;

const ALL_USERS_QUERY = gql`
    query {
        users {
            id
            name
            email
            permissions
        }
    }
`;

const Permissions = props => (
    <Query query={ ALL_USERS_QUERY }>
        {({data, loading, error}) => {
            if(error) return <Error error={ error }/>
            if(loading) return <p>Loading...</p>
            return (
                <div>
                    <h2>Manage Permissions</h2>
                    <table cellPadding="10" style={{width: '100%', textAlign: 'center'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                {possiblePermissions.map((permission) => {
                                    return <th key={permission}>{permission}</th>
                                })}
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(user => <UserRow user={user} key={user.id} />)}
                        </tbody>
                    </table>
                </div>
            );
        }}
    </Query>
)

const UserRow = ({user}) => {
    const [permissions, setPermissions] = useState(user.permissions);

    const handlePermissionChange = (e) => {
        const checkbox = e.target;
        // add or remove the permission from the permissions array
        if(checkbox.checked){
            setPermissions([...permissions, checkbox.value]);
        }else{
            setPermissions(permissions.filter(permission => permission !== checkbox.value));
        }
    }

    return (
        <Mutation mutation={UPDATE_PERMISSIONS_MUTATION} variables={{ userId: user.id, permissions }}>{
            (updatePermissions, { loading, error }) => (
                <Fragment>
                    {error && <tr>
                        <td colspan="4">
                            <Error error={error}/>
                        </td>
                    </tr>}
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        {possiblePermissions.map(permission => {
                            return (
                                <td key={permission}>
                                    <label htmlFor={`${user.id}-permission-${permission}`} style={{display: 'block'}}>
                                        <input
                                            type="checkbox"
                                            id={`${user.id}-permission-${permission}`}
                                            value={permission}
                                            onChange={handlePermissionChange}
                                            checked={permissions.includes(permission)}
                                        />
                                    </label>
                                </td>
                            );
                        })}
                        <td>
                            <button type="button" disabled={loading} onClick={updatePermissions}>
                                Updat{loading ? 'ing' : 'e'}
                            </button>
                        </td>
                    </tr>
                </Fragment>
            )
        }</Mutation>
    );
}

UserRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        permissions: PropTypes.array
    }).isRequired
  };

export default Permissions;