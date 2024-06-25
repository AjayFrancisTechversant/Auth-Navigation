import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Button, Touchable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import { PEXELS_API_KEY } from '../../Services/API/PexelsAPI'

const { height, width } = Dimensions.get('screen')
const ApiUrl = 'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20'
const imageSize = 80;
const spacing=10

const Gallery = () => {
    const [images, setImages] = useState([])
    const topRef = useRef(null)
    const bottomRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        fetchImagesFromPexels()
    }, [])


    const fetchImagesFromPexels = async () => {
        try {
            const response = await fetch(ApiUrl, { headers: { 'Authorization': PEXELS_API_KEY } })
            const data = await response.json()
            setImages(data.photos)
        } catch (error) {
            console.log(error);
        }

    }
    const scrollToActiveIndex = (index) => {
        setActiveIndex(index)
        topRef?.current?.scrollToOffset({offset:index*width,animated:true})
        if(index*(imageSize+spacing)-imageSize/2>width/2){
            bottomRef?.current?.scrollToOffset({
                offset:index*(imageSize+spacing)-width/2+imageSize/2,
                animated:true})
        }else{
            bottomRef?.current?.scrollToOffset({
                offset:0,
                animated:true})
        }
    }
    console.log(activeIndex);
    
    const screenStyles = styles(
        width,
        height,
        imageSize,
        spacing
    );
    return (
        <View style={screenStyles.canvas} >
            <FlatList
                ref={topRef}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={ev => {
                    scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/ width) )
                }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={images}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item.src.portrait }}
                            style={screenStyles.topImage}
                        />
                    )
                }}
            />
            <FlatList
                ref={bottomRef}
                horizontal
                style={screenStyles.bottomFlatlist}
                contentContainerStyle={{ paddingHorizontal: spacing }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={images}
                renderItem={({ item,index }) => {
                    return (
                        <TouchableOpacity onPress={()=>scrollToActiveIndex(index)}>
                            <Image source={{ uri: item.src.portrait }}
                                style={[screenStyles.bottomImage,{borderWidth:2,borderColor:index===activeIndex?'white':'transparent'}]}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Gallery