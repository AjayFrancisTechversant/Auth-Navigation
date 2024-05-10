import { Text, View, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Style'
import { useScreenContext } from '../../Contexts/ScreenContext'
import Card from '../../Components/Card/Card'
import axios from 'axios'



const Home = ({ navigation }) => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
    }
    useEffect(() => {
        getProducts()
    }, [])

    const handlePress = (item) => {
        navigation.push('Details', { item })
    }
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View style={screenStyles.Container}>

            <FlatList ListEmptyComponent={<ActivityIndicator size={50} color='#5ead97' />} onRefresh={()=>{getProducts()}}
            refreshing={false} 
                ListHeaderComponent={<Text style={{ alignSelf: 'center', fontSize: 50, fontFamily: 'helvetica-light-587ebe5a59211' }}>Product List</Text>}
                data={products}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <Card Component={'Home'} item={item} />
                    </TouchableOpacity>
                }

            />

        </View>
    )
}

export default Home

