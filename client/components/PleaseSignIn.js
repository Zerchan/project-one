import { Fragment } from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = props => (
    <Query query={ CURRENT_USER_QUERY }>
        {({data, loading}) => {
            if(loading) return <p>Loading...</p>
            if(!data.me){
                return (
                    <Fragment>
                        <p>Please sign in</p>
                        <Signin />
                    </Fragment>
                )
            }

            return props.children
        }}
    </Query>
)

export default PleaseSignIn;