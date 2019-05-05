// export default Reservations;
import { Fragment, useState, } from 'react';
// import PropTypes from 'prop-types';
// import { Query, Mutation } from 'react-apollo';
// import { gql } from "apollo-boost";
// import Error from './ErrorMessage';
import DatePicker from "react-datepicker";
import moment from "moment";

const Reservations = props => {
    const initialState = {
        // startDate: new Date(),
        // endDate: new Date(),
        comments: ''
    };
    
    const [state, setState] = useState(initialState);
    const saveToState = (e) => { setState({...state, [e.target.name]: e.target.value}) }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <form method="post" onSubmit={async (e) => {
            e.preventDefault();
            // await signup();
            console.log(startDate, endDate, state);
            setState(initialState);
        }}>
            {/*<fieldset disabled={loading} aria-busy={loading}>*/}
            <fieldset>
                <h2>Create a Reservation</h2>
                {/*<Error error={error}/>*/}
                <label htmlFor="startDate">
                    Start Date:
                    {/*<input type="text" placeholder="xx/xx/xxxx" name="startDate" value={state.startDate} onChange={saveToState}/>*/}
                    <DatePicker
                        showTimeSelect
                        selected={moment(startDate)}
                        onChange={setStartDate}
                    />
                </label>
                <label htmlFor="endDate">
                    End Date:
                    {/*<input type="text" placeholder="xx/xx/xxxx" name="endDate" value={state.endDate} onChange={saveToState}/>*/}
                    <DatePicker
                        showTimeSelect
                        selected={moment(endDate)}
                        onChange={setEndDate}
                    />
                </label>
                <label htmlFor="comments">
                    Comments:
                    <input type="text" placeholder="Comments" name="comments" value={state.comments} onChange={saveToState}/>
                </label>
                <button type="submit">Save</button>
            </fieldset>
        </form>
    )
}

export default Reservations;