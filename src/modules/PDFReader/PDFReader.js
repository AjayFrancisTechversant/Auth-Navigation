import {View, Text, Alert} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const PDFReader = ({navigation}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.canvas}>
      <MenuDrawerButton navigation={navigation} color={ColorPalette.green}/>
      <Pdf
      trustAllCerts={false}
        source={{
          uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
        }}
        onLoadProgress={(percent)=>{
            // console.log('percent', percent)
        }}
        onLoadComplete={(numberOfPages, filePath) => {
            console.log('filePath', filePath)
         
        }}
        onPageChanged={(page, numberOfPages) => {
         
        }}
        onError={error => {
          Alert.alert(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        enableDoubleTapZoom
        password='hi'
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        style={screenStyles.pdfView}
      />
    </View>
  );
};

export default PDFReader;
