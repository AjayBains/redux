import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemComponent from "./components/ItemComponent";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./components/redux/store";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <ItemComponent cake />
      <ItemComponent />
      <UserContainer />
    </Provider>
  );
}

export default App;
