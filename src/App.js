import "./App.css";
import RoutesComponent from "./Components/Routes";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
function App() {
  return (
    <div>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </div>
  );
}

export default App;
