import "../App.css";
import Pizzacarousel from "../Components/Pizzacarousel";
import Menu from "../Components/Menu";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import Reserve from "../Components/Reserve";
import Pizzas from "../Components/Pizzas";
import Testi from "../Components/Testi";
import Service from "../Components/Service";
import Review from "../Components/Review";

function Home() {
  return (
    <div>
      <Pizzacarousel />
      <Menu />
      <Card />
      <Pizzas />
      <Card2 />
      <Testi />
      <Reserve />
      <Service />
      <Review />
    </div>
  );
}

export default Home;
