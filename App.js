import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CounterScreen: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    },
  }
);

export default createAppContainer(navigator);
