// import { useState } from "react";
import Pcard from "./Pcard";

function Pizzas() {
  return (
    <div className="pizza">
      <h1 className="text-center title">SELECTED PIZZAS</h1>
      <div className="flex-container">
        <div>
          <Pcard
            img="https://livedemo00.template-help.com/wt_51689/images/product-1-161x162.png"
            h3="Margherita Pizza"
            p="$24.00"
          />
        </div>
        <div>
          <Pcard
            img="https://livedemo00.template-help.com/wt_51689/images/product-2-161x162.png"
            h3="Mushroom Pizza"
            p="$24.00"
          />
        </div>
        <div>
          <Pcard
            img="https://livedemo00.template-help.com/wt_51689/images/product-3-161x162.png"
            h3="Hawaiian Pizza"
            p="$24.00"
          />
        </div>
        <div>
          <Pcard
            img="https://livedemo00.template-help.com/wt_51689/images/product-4-161x162.png"
            h3="Pesto Pizza"
            p="$24.00"
          />
        </div>
      </div>
    </div>
  );
}

export default Pizzas;
