import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopping, toggleGluten } from "../redux/pizzaSlice";

const Pizzas = () => {
  // El useSelector apunta a nuestro reducer de la store.js
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h1>Order Pizza</h1>

      <button onClick={() => dispatch(addTopping("pepperoni"))}>Add Pepperoni</button>
      <button onClick={() => dispatch(addTopping("anchovies"))}>Add Anchovies</button>
      <button onClick={() => dispatch(addTopping("olives"))}>Add Olives</button>
      <button onClick={() => dispatch(toggleGluten())}>Toggle Gluten</button>

      <p>
        <b>Ingredients:</b>
      </p>
      <hr />
      {pizza.toppings.map((topping, index) => (
        <div key={index}>{topping}s</div>
      ))}
      {pizza.gluten && "Gluten FREE"}
    </Fragment>
  );
};

export default Pizzas;
