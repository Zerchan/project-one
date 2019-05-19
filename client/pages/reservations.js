import PleaseSignIn from '../components/PleaseSignIn';
import Reservations from '../components/Reservations';

const ReservationsPage = props => {
    return (
        <PleaseSignIn>
            <Reservations />
        </PleaseSignIn>
       
    );
  };
  
  export default ReservationsPage;
  