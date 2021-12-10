import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CounterScreen: CounterScreen,
    ColorScreen : ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen,
    SearchScreen: SearchScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    },
  }
);

export default createAppContainer(navigator);
