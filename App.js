import { SCREENS_REGISTERER as registerScreens } from './src/configs';
import { SCREENS } from './src/constants';
import { Navigation } from 'react-native-navigation';

registerScreens();
// Start a App
const App = Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.INITIALIZER,
              options: {
                statusBar: {
                  style: 'light',
                  backgroundColor: 'white',
                  drawBehind: false
                }
              }
            }
          }
        ],
        options: {
          topBar: {
            visible: false
          }
        }
      }
    }
  });
});

export default App;
