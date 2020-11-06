import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList168540Navigator from '../features/ArticleList168540/navigator';
import ArticleList168539Navigator from '../features/ArticleList168539/navigator';
import ArticleList168309Navigator from '../features/ArticleList168309/navigator';
import ArticleList168308Navigator from '../features/ArticleList168308/navigator';
import ArticleList168307Navigator from '../features/ArticleList168307/navigator';
import ArticleList168290Navigator from '../features/ArticleList168290/navigator';
import ArticleList168289Navigator from '../features/ArticleList168289/navigator';
import ArticleList168288Navigator from '../features/ArticleList168288/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList168540: { screen: ArticleList168540Navigator },
ArticleList168539: { screen: ArticleList168539Navigator },
ArticleList168309: { screen: ArticleList168309Navigator },
ArticleList168308: { screen: ArticleList168308Navigator },
ArticleList168307: { screen: ArticleList168307Navigator },
ArticleList168290: { screen: ArticleList168290Navigator },
ArticleList168289: { screen: ArticleList168289Navigator },
ArticleList168288: { screen: ArticleList168288Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
