import {View, Image} from 'react-native';
import React, {useRef} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {images} from '../../Assets/Images/CarouselImages';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';

const HomeScreenCarousel = () => {
  const ref = useRef(0);
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.carouselContainer}>
      <Carousel
        ref={ref}
        scrollAnimationDuration={2000}
        width={screenContext.windowWidth}
        style={screenStyles.carousel}
        autoPlay={true}
        autoPlayInterval={2000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 80,
        }}
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={screenStyles.image} />
        )}
      />
    </View>
  );
};

export default HomeScreenCarousel;
