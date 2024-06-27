import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './Style';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const CardA = ({item, index, onPressDeletefn, componentlocation}) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity
        onPress={() => onPressDeletefn(index)}
        style={styles.imageDeleteCloseButton}>
        <AntDesign name="closecircle" size={30} color={ColorPalette.red} />
      </TouchableOpacity>
      {componentlocation == 'cacheImagesDisplay' ? (
        <Image source={{uri: `file://${item}`}} style={styles.imageStyle} />
      ) : (
        <Image source={{uri: `file://${item}`}} style={styles.imageStyle} />
      )}
    </View>
  );
};

export default CardA;
