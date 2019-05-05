// import Items from "../components/Items";
import PleaseSignIn from '../components/PleaseSignIn';
import Calendar from '../components/Calendar';

const Home = ({ query: { page } }) => {
  return (
    <PleaseSignIn>
      {/*<Items page={parseFloat(page) || 1} />*/}
      <Calendar />
    </PleaseSignIn>
  );
};

export default Home;
