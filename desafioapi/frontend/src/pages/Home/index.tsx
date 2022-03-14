import { Link } from 'react-router-dom';
import './styles.css';
const Home = () => {
  return (
    <div className="home-container">
      <>
        <div className="home-title">
          <h1>Desafio Github API</h1>
        </div>
        <div className="home-content">
          <h6>Bootcamp Spring React - DevSuperior</h6>
        </div>
        <div className="btn-container">
          <Link to="/perfils">
            <button className="btn btn-primary home-button">Começar</button>
          </Link>
        </div>
      </>
    </div>
  );
};

export default Home;
