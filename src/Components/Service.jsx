import "./Scard.jsx";
import Scard from "./Scard.jsx";
function Service() {
  return (
    <div className="serve flex-container">
      <Scard
        h1="Best Service"
        p="The client is our #1 priority as we deliver top-notch customer service."
      />
      <Scard
        h1="Free Delivery"
        p="If you order more than 3 pizzas, we will gladly deliver them to you for free"
      />
      <Scard
        h1="Convinent Location"
        p="Our pizzeria is situated in the downtown and is very easy to reach even on weekends."
      />
      <Scard
        h1="Free Wifi"
        p="We have free WI-FI available to all clients and visitors of our pizzeria."
      />
    </div>
  );
}

export default Service;
