import { ReactComponent as CarImage } from "assets/images/car-home.svg";
import Button from "components/Button";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card-main">
        <div className="home-card-image">
          <CarImage></CarImage>
        </div>
        <div className="home-card-main-text">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="base-card home-card-button">
        <div>
          <Link to="/products">
            <Button text="VER CATÁLOGO"></Button>
          </Link>
        </div>
        <div>
          <h1>Comece agora a navegar</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
