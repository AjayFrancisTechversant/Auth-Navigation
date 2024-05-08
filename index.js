/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './App';
import Listing from './src/Components/Listing/Listing';
import Sample from './src/Sample';

AppRegistry.registerComponent(appName, () => Main);
