import {StyleSheet} from 'react-native';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    carouselContainer: {
      height: 260,
      borderRadius: 10,
      borderColor: 'blue',
    },
    carousel: {
      justifyContent: 'center',
    },
    image: {
      height: 250,
      width: '90%',
      borderRadius: 10,
    },
  });
export default styles;
