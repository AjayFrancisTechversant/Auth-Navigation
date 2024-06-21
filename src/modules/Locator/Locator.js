import { View, Text, ImageBackground, ActivityIndicator, Linking, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './Style';
import { useScreenContext } from '../../Contexts/ScreenContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import GetLocation from 'react-native-get-location';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const Locator = () => {
    const [isLocationFetched, setIsLocationFetched] = useState(false);
    const [location, setLocation] = useState({});
    const [isLocationFetchingLoading, setIsLocationFetchingLoading] = useState(false);
    const [region, setRegion] = useState('');

    const handleCurrentLocationButton = async () => {
        setIsLocationFetchingLoading(true);
        try {
            const loc = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 60000,
            });
            setLocation(loc);
            await fetchRegion(loc);
            setIsLocationFetched(true);
        } catch (error) {
            Alert.alert(error.message)
            console.log(error.code, error.message);
        } finally {
            setIsLocationFetchingLoading(false);
        }
    }

    const fetchRegion = async (loc) => {
        try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${loc.latitude}%2C${loc.longitude}&key=dea3c45cdb0e4a4ea8c1ee183cbe55d6`);
            const data = await response.json();
            setRegion(data.results[0]?.formatted || 'Region not found');
        } catch (error) {
            console.error(error);
        }
    }

    const openInMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
        Linking.openURL(url).catch(err => console.error('Error opening Google Maps:', err));
    }

    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );

    return (
        <View style={screenStyles.canvas}>
            <ImageBackground blurRadius={1} source={require('../../Assets/Images/map-bg1.jpg')} resizeMode="cover" style={screenStyles.bgImage}>
                <Text style={screenStyles.mainHeading}>Locator</Text>
                {isLocationFetched ? (
                    <ScrollView style={screenStyles.detailsContainer}>
                        <TouchableOpacity
                            onPress={() => setIsLocationFetched(false)}
                            style={screenStyles.closeButton}>
                            <AntDesign name='closecircle' size={30} />
                        </TouchableOpacity>
                        <Text style={screenStyles.subHeading}>{region}</Text>
                        <Text style={screenStyles.text}>Latitude: {location.latitude}</Text>
                        <Text style={screenStyles.text}>Longitude: {location.longitude}</Text>
                        <Text style={screenStyles.text}>Altitude: {location.altitude}</Text>
                        <TouchableOpacity style={screenStyles.openMapsButton} onPress={openInMaps}>
                            <MaterialCommunityIcons color='white' name='google-maps' size={20} />
                            <Text style={screenStyles.openMapsText}>Open in Maps</Text>
                        </TouchableOpacity>
                    </ScrollView>
                ) : (
                    <View style={screenStyles.currentLocationButtonContainer}>
                        {isLocationFetchingLoading ? (
                            <View style={screenStyles.currentLocationButton}>
                                <ActivityIndicator />
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={screenStyles.currentLocationButton}
                                onPress={handleCurrentLocationButton}>
                                <FontAwesome6 name='location-crosshairs' color={ColorPalette.green} size={20} />
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </ImageBackground>
        </View>
    );
}

export default Locator;
