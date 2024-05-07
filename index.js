/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './App';
import FormPage from './src/screens/FormPage/FormPage';
import Listing from './src/Components/Listing';

AppRegistry.registerComponent(appName, () => Main);
