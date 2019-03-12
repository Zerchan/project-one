import React, { useState } from 'react';
import { gql } from "apollo-boost";
import { Mutation } from 'react-apollo';
// import { useMutation } from 'react-apollo-hooks';
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
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const signupMutation = useMutation(SIGNUP_MUTATION, {
    //     variables: state
    // })

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

// class Signup extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: ''
//     }

//     saveToState = (e) => {
//         console.log(e.target.name, e.target.value);
//         this.setState({[e.target.name]: e.target.value})
//     }

//   render() {
//     return (
//         <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>{
//             (signup, { error, loading }) => {
//                 return (
//                     <form method="post" onSubmit={(e) => {
//                         e.preventDefault();
//                         signup();
//                     }}>
//                     <fieldset disabled={loading} aria-busy={loading}>
//                         <h2>Sign Up for an Account</h2>
//                         <p>{ error }</p>
//                         <label htmlFor="name">
//                             Name
//                             <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.saveToState}/>
//                         </label>
//                         <label htmlFor="email">
//                             Email
//                             <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.saveToState}/>
//                         </label>
//                         <label htmlFor="password">
//                             Password
//                             <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.saveToState}/>
//                         </label>
//                         <button type="submit">Sign up!</button>
//                     </fieldset>
//                 </form>)
//             }}</Mutation>
//          )
//   }
// }

// export default Signup;