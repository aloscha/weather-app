import { WeatherView } from "./components";
import { Provider } from "react-redux";
import { WeatherStore } from "./store";

import "./App.less";

function App() {
  return (
    <Provider store={WeatherStore}>
      <WeatherView />
    </Provider>
  );
}

export default App;
