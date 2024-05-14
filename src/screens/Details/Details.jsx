import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ColorPalette from '../../Assets/Themes/ColorPalette'



const Details = (props) => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );

    const { item } = props.route.params
    return (

        <>
            <KeyboardAwareScrollView  style={screenStyles.Container}>
              <View style={screenStyles.userContainer}>
                    <Text style={screenStyles.title}>
                        {`${item.name.title}. ${item.name.first} ${item.name.last}`}
                    </Text>
                    <Image
                        style={screenStyles.profilePic}
                        source={{
                            uri: item.picture.large
                        }}
                    />
                   <View style={screenStyles.buttonsContainer} >
                        <TouchableOpacity>
                            <MaterialIcons name='favorite-outline' color={ColorPalette.red} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name='user-plus' color={ColorPalette.blue} size={30} />
                        </TouchableOpacity>
                   </View>
                    <View style={screenStyles.descContainer}>
                        <Text >
                            Age: {item.dob.age}
                        </Text>
                        <Text>
                            Gender: {item.gender}
                        </Text>
                        <Text>
                            Email: {item.email}
                        </Text>
                        <Text>
                            Location: {item.location.state}, {item.location.country}
                        </Text>
                        <Text>
                            Phone: {item.phone}
                        </Text>
                    </View>
    
              </View>
            </KeyboardAwareScrollView>

        </>
    )
}

export default Details

