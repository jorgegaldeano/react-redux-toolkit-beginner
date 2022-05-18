import Pizzas from "./components/Pizzas";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Pizzas />
    </Provider>
  );
}

export default App;
