import 'react-native-gesture-handler';
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from './App';
import { database } from './src/DB/Database';

AppRegistry.registerComponent(appName, () => Main);
