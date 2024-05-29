import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import ColorPalette from '../../Assets/Themes/ColorPalette';

const MenuDrawerButton = ({navigation,screen}) => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name='menu' size={30} color={screen!='Home'?ColorPalette.green:'#e3f5e9'} />
        </TouchableOpacity>
    )
}

export default MenuDrawerButton