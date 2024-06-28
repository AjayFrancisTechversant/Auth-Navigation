import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';
import AddFriendButton from '../AddFriendButton/AddFriendButton';
import styles from './Style';

const HomeScreenCard = ({item, setModalCloseToggle, modalCloseToggle}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const name = item.name.first + ' ' + item.name.last;
  const {email, phone} = item;
  const {age} = item.dob;
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <TouchableOpacity
      onPress={() => setIsModalVisible(true)}
      style={screenStyles.cardContainer}>
      <Image
        style={screenStyles.image}
        source={{
          uri: item.picture.large,
        }}
      />
      <View style={screenStyles.detailsContainer}>
        <Text style={screenStyles.title}>{name}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text>Age: {age}</Text>
      </View>
      <View style={screenStyles.buttonsContainer}>
        <LikeDislikeButton item={item} />
        <AddFriendButton item={item} />
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
          setModalCloseToggle(!modalCloseToggle);
        }}>
        <View style={screenStyles.modalFullScreenBackground}>
          <View style={screenStyles.modalContainer}>
            <View style={screenStyles.userContainer}>
              <Text style={screenStyles.title}>
                {`${item.name.title}. ${item.name.first} ${item.name.last}`}
              </Text>
              <Image
                style={screenStyles.modalImage}
                source={{
                  uri: item.picture.large,
                }}
              />
              <View style={screenStyles.modalButtonsContainer}>
                <LikeDislikeButton item={item} />
                <AddFriendButton item={item} />
              </View>
              <View style={screenStyles.descContainer}>
                <Text>Age: {item.dob.age}</Text>
                <Text>Gender: {item.gender}</Text>
                <Text>Email: {item.email}</Text>
                <Text>
                  Location: {item.location.state}, {item.location.country}
                </Text>
                <Text>Phone: {item.phone}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default React.memo(HomeScreenCard);
