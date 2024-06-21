import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style';
import { useScreenContext } from '../../Contexts/ScreenContext';

const Locator = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View>
            <Text>Locator</Text>
        </View>
    )
}

export default Locator