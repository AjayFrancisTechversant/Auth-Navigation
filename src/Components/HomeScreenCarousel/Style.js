import {StyleSheet} from 'react-native';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    carouselContainer: {
      height: height*0.3,
      borderRadius: 10,
      borderColor: 'blue',
    },
    carousel: {
      justifyContent: 'center',
    },
    image: {
      height: height*0.3,
      width: width*0.9,
      borderRadius: 10,
    },
  });
export default styles;
