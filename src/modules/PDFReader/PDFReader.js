import {View, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useScreenContext} from '../../Contexts/ScreenContext';
import MenuDrawerButton from '../../Components/MenuDrawerButton/MenuDrawerButton';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import styles from './Style';
import {Text} from 'react-native';

const PDFReader = ({navigation}) => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.canvas}>
      {!isPDFOpen ? (
        <View>
          <MenuDrawerButton
            navigation={navigation}
            color={ColorPalette.green}
          />
          <TouchableOpacity
            onPress={() => {
              setIsPDFOpen(true);
            }}>
            <Text>OpenPDF</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={screenStyles.canvas}>
          <TouchableOpacity
            style={screenStyles.backButton}
            onPress={() => setIsPDFOpen(false)}>
            <AntDesign name="left" size={30} color={ColorPalette.green} />
          </TouchableOpacity>
          <Pdf
            trustAllCerts={false}
            source={{
              uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
            }}
            onLoadProgress={percent => {
              // console.log('percent', percent)
            }}
            onLoadComplete={(numberOfPages, filePath) => {}}
            onPageChanged={(page, numberOfPages) => {}}
            onError={error => {
              Alert.alert(error);
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            enableDoubleTapZoom
            password="hi"
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}
            style={screenStyles.pdfView}
          />
        </View>
      )}
    </View>
  );
};

export default PDFReader;
