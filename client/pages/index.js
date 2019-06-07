// import Items from "../components/Items";
import PleaseSignIn from '../components/PleaseSignIn';
import Reservations from '../components/Reservations';

// const Home = ({ query: { page } }) => {
const Home = () => {
  return (
    <PleaseSignIn>
      {/*<Items page={parseFloat(page) || 1} />*/}
      <Reservations />
    </PleaseSignIn>
  )
};

export default Home;
