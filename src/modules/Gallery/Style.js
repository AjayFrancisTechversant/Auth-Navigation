import {StyleSheet} from 'react-native';

const styles = (width, height, imageSize, spacing) =>
  StyleSheet.create({
    canvas: {
      flex: 1,
    },
    topImage: {
      height,
      width,
    },
    bottomFlatlist: {
      position: 'absolute',
      bottom: imageSize,
    },
    bottomImage: {
      height: imageSize,
      width: imageSize,
      borderRadius: 12,
      marginRight: spacing,
    },
  });
export default styles;
