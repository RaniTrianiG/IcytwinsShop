import { Navigation } from 'react-native-navigation';
import evilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SCREENS } from '../constants';

const startTabs = () => {
  Promise.all([
    MaterialCommunityIcons.getImageSource('view-dashboard', 40),
    evilIcon.getImageSource('calendar', 40),
    evilIcon.getImageSource('gear', 40),
    evilIcon.getImageSource('check', 40)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysShow',
              animate: false
            },
            animations: false
          },
          children: [
            {
              stack: {
                children: [{ component: { name: SCREENS.EXAMPLE } }],
                options: {
                  bottomTab: {
                    text: 'Beranda',
                    fontSize: 12,
                    icon: sources[0],
                    iconColor: '#777D71',
                    selectedIconColor: '#3088C8',
                    textColor: '#777D71',
                    selectedTextColor: '#3088C8',
                    fontFamily: 'Helvetica'
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: SCREENS.HOME,
                      options: {
                        topBar: {
                          visible: false,
                          height: 0,
                          elevation: 0
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    selectedIconColor: '#3088C8',
                    selectedTextColor: '#3088C8',
                    fontSize: 12,
                    text: 'Koleksi',
                    icon: sources[1]
                  }
                }
              }
            },
            {
              stack: {
                children: [{ component: { name: SCREENS.EXAMPLE } }],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Lisensi',
                    icon: sources[3]
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export default startTabs;
