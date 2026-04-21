import { Link } from 'react-router-dom';
import Bakery from '../components/bakery/Bakery';
import BrewzoFooter from '../components/footer/BrewzoFooter';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home-demo-hero">
        <div className="home-demo-hero__inner">
          <p className="home-demo-hero__eyebrow">Home Page Demo</p>
          <h1 className="home-demo-hero__title">A simple landing page to test routing.</h1>
          <p className="home-demo-hero__copy">
            Use the demo header to move between the Home and Events pages and verify
            the navigation flow in the app.
          </p>
          <div className="home-demo-hero__actions">
            <Link to="/events" className="home-demo-hero__button">
              Go To Events
            </Link>
          </div>
        </div>
      </section>

      <Bakery />
      <BrewzoFooter />
    </>
  );
};

export default Home;
