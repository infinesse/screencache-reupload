import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DataSearch from './DataSearch';
import UploadTab from './UploadTab';

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: DataSearch
    },
    Upload: {
      screen: UploadTab
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: 'black' },
    labeled: false
  }
);

export default createAppContainer(BottomTabNavigator);
