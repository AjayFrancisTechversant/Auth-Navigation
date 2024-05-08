/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './App';
import Listing from './src/Components/Listing/Listing';
import Card from './src/Components/Card/Card';

AppRegistry.registerComponent(appName, () => Main);
