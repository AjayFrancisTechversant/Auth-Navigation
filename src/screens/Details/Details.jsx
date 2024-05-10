import { Text, View, Image } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext'


const Details = (props) => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );

    const { title, description, image } = props.route.params.item

    return (

        <>
            <KeyboardAwareScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View style={screenStyles.card}>
                        <Text style={screenStyles.title}>{title}</Text>
                            <Image 
                                style={screenStyles.image}
                                source={{
                                    uri: `${image}`
                                }}
                            />
                            <Text style={screenStyles.description}>{description}</Text>
                    </View>
                </View>


            </KeyboardAwareScrollView>

        </>
    )
}

export default Details

