import { Fragment } from 'react';
// import { Query } from 'react-apollo';
// import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';
import useUser from './useUser';

const PleaseSignIn = props => {
    const { data, loading } = useUser();

    if(loading){
        return <p>Loading...</p>
    }
    
    return (
        <Fragment>
            { data ? props.children : <Signin /> }
        </Fragment>
    )
}

export default PleaseSignIn;