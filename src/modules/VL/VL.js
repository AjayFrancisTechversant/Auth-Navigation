import { View, Text, Alert, VirtualizedList, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Style';
import { useScreenContext } from '../../Contexts/ScreenContext';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ShareIcon from '../../Assets/SVGs/shareIcon.svg'
import ChatIcon from '../../Assets/SVGs/chatIcon.svg'


const VL = ({ navigation }) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fecthComments()
    }, [])
    const fecthComments = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await res.json()
            setComments(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)

        }
    }
    const getItem = (data, index) => {
        return data[index];
    };
    const getItemCount = (data) => {
        return data.length;
    };
    const emptyComponent = () => {
        return (
            <View style={screenStyles.emptyComponentContainer}>
                <Text style={screenStyles.emptyComponentText}> No comments :(</Text>
            </View>
        )
    }

    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View style={screenStyles.canvas}>
            <View style={screenStyles.MenuDrawerButton} >
                <MenuDrawerButton navigation={navigation} color={ColorPalette.lightOrange} />
            </View>
            <View style={[screenStyles.flexDRow, screenStyles.headingContainer]}>
                <Text style={screenStyles.heading}>Comments</Text>
                <ChatIcon fill={ColorPalette.lightOrange} width={30} height={30} />
            </View>


            <View style={[screenStyles.commentsContainer,]}>
                {!loading ?
                    <VirtualizedList
                        data={comments}
                        getItemCount={getItemCount}
                        getItem={getItem}
                        renderItem={({ item }) =>
                        (<View style={screenStyles.commentCard}>
                            <Text style={screenStyles.commentTitle} >{item.name}</Text>
                            <Text >{item.body}</Text>
                        </View>)

                        }
                        ListEmptyComponent={emptyComponent}
                        ListHeaderComponent={
                            <View style={screenStyles.separator}></View>
                        }
                        keyExtractor={(item) => item.id.toString()}
                        initialNumToRender={5}
                        persistentScrollbar
                    // maxToRenderPerBatch={10}

                    />
                    :
                    <View style={screenStyles.loadingContainer}>
                        <ActivityIndicator size={50} color={'white'} />
                    </View>
                }
            </View>
        </View>
    )
}

export default React.memo(VL)