import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Style';
import { useScreenContext } from '../../Contexts/ScreenContext';

const HomeScreenCard = ({ item }) => {
    const name=item.name.first+' '+item.name.last
    const {email,phone}=item
    const {age}=item.dob
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View style={screenStyles.cardContainer}>
            <Image
                style={screenStyles.image}
                source={{
                    uri: item.picture.large,
                }}
            />
            <View style={screenStyles.detailsContainer}>
                <Text>{name}</Text>
                <Text>{email}</Text>
                <Text>{phone}</Text>
                <Text>Age: {age}</Text>
            </View>

        </View>
    )
}

export default HomeScreenCard