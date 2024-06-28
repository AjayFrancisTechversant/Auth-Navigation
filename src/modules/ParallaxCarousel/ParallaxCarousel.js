import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';

const ParallaxCarousel = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const height = screenContext.windowHeight;
  const width = screenContext.windowWidth;

  const images = [
    'https://images.pexels.com/photos/26690674/pexels-photo-26690674/free-photo-of-peary-caribou-walking-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26645620/pexels-photo-26645620/free-photo-of-palm-tree-leaning-over-the-beach.jpeg',
    'https://images.pexels.com/photos/26791775/pexels-photo-26791775/free-photo-of-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26780932/pexels-photo-26780932/free-photo-of-a-bicycle-parked-in-front-of-a-brick-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26775316/pexels-photo-26775316/free-photo-of-al-farooq-mosque-old-dubai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26771161/pexels-photo-26771161/free-photo-of-a-person-with-blue-hair-wearing-a-hoodie-with-the-word-survival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26770395/pexels-photo-26770395/free-photo-of-a-black-and-white-photo-of-a-sheep-with-long-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26761029/pexels-photo-26761029/free-photo-of-a-black-and-white-photo-of-a-gate-with-the-words-the-house-of-the-future.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26757499/pexels-photo-26757499/free-photo-of-a-house-is-in-the-middle-of-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  const data = images.map((image, index) => ({
    key: String(index),
    photo: image,
    avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
      Math.random() * 40,
    )}.jpg`,
  }));
  return (
    <View style={screenStyles.canvas}>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => (
          <View style={screenStyles.renderItemContainer}>
            <View style={screenStyles.imageSuperWrapper}>
              <View style={screenStyles.imageWrapper}>
                <Image
                  style={screenStyles.ImageStyle}
                  source={{uri: item.photo}}
                  resizeMode="cover"
                />
              </View>
              <Image
                style={screenStyles.avatarImageStyle}
                source={{uri: item.avatar_url}}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ParallaxCarousel;
