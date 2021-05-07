import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { SCREENS } from '../constants';
import configureStore from '../store/configureStore';
import Login from '../screens/Login';
import Initializer from '../screens/Initializer';
import ExamplePage from '../screens/ExamplePage';
import Register from '../screens/Register';
import Forget from '../screens/Forget';
import Home from '../screens/Home';

import Category from '../screens/Category/ListCategory';
import CategoryDetail from '../screens/Category/DetailCategory';
import CategoryAdd from '../screens/Category/AddCategory';

import SubCategory from '../screens/SubCategory/ListSubCategory';
import SubCategoryDetail from '../screens/SubCategory/DetailSubCategory';
import SubCategoryAdd from '../screens/SubCategory/AddSubCategory';

import Product from '../screens/Product/ListProduct';
import ProductDetail from '../screens/Product/DetailProduct';
import ProductAdd from '../screens/Product/AddProduct';

import Transaction from '../screens/Transaction/ListTransaction';

const store = configureStore();

const registerScreens = () => {
  // Register Screens
  Navigation.registerComponentWithRedux(SCREENS.LOGIN, () => Login, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.INITIALIZER, () => Initializer, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.EXAMPLE, () => ExamplePage, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.REGISTER, () => Register, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.FORGET, () => Forget, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.HOME, () => Home, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.CATEGORY, () => Category, Provider, store);
  Navigation.registerComponentWithRedux(SCREENS.ADD_CATEGORY, () => CategoryAdd, Provider, store);
  Navigation.registerComponentWithRedux(SCREENS.DETAIL_CATEGORY, () => CategoryDetail, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.SUB_CATEGORY, () => SubCategory, Provider, store);
  Navigation.registerComponentWithRedux(SCREENS.ADD_SUB_CATEGORY, () => SubCategoryAdd, Provider, store);
  Navigation.registerComponentWithRedux(
    SCREENS.DETAIL_SUB_CATEGORY,
    () => SubCategoryDetail,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(SCREENS.PRODUCT, () => Product, Provider, store);
  Navigation.registerComponentWithRedux(SCREENS.ADD_PRODUCT, () => ProductAdd, Provider, store);
  Navigation.registerComponentWithRedux(SCREENS.DETAIL_PRODUCT, () => ProductDetail, Provider, store);

  Navigation.registerComponentWithRedux(SCREENS.TRANSACTION, () => Transaction, Provider, store);

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
