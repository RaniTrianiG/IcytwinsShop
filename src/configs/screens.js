import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { SCREENS } from '../constants';
import configureStore from '../store/configureStore';
import Login from '../screens/Login';
import Initializer from '../screens/Initializer';
import ExamplePage from '../screens/ExamplePage';
import Register from '../screens/Register';
import Home from '../screens/Home';

const store = configureStore();

const registerScreens = () => {
  // Register Screens
  Navigation.registerComponentWithRedux(SCREENS.LOGIN, () => Login, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.INITIALIZER, () => Initializer, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.EXAMPLE, () => ExamplePage, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.REGISTER, () => Register, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.HOME, () => Home, Provider, store);

  // Navigation.registerComponentWithRedux('app.HistoryScreen', () => History, Provider, store);

  // Navigation.registerComponentWithRedux('app.SettingsScreen', () => Settings, Provider, store);

  // Navigation.registerComponentWithRedux('app.DevicesScreen', () => Devices, Provider, store);

  // Navigation.registerComponentWithRedux(
  //   'app.DetailHistoryScreen',
  //   () => DetailHistory,
  //   Provider,
  //   store
  // );

  // Navigation.registerComponentWithRedux(
  //   'app.DetailDeviceScreen',
  //   () => DeviceDetail,
  //   Provider,
  //   store
  // );
};

export default registerScreens;
