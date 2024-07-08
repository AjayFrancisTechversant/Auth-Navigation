import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const CommentCard = ({item}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalOpacity = useSharedValue(0);
  const modalScale = useSharedValue(0);
  const openModal = () => {
    setIsModalVisible(true);
    modalOpacity.value = withSpring(1);
    modalScale.value = withSpring(1);
  };
  const closeModal = () => {
    modalOpacity.value = withSpring(0);
    modalScale.value = withSpring(0);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 200);
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: modalOpacity.value,
      transform: [{scale: modalScale.value}],
    };
  });
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={screenStyles.commentCard}>
      <TouchableOpacity onPress={() => openModal()}>
        <Text style={screenStyles.commentTitle}>{item.id}</Text>
        <Text>{item.body}</Text>
      </TouchableOpacity>
      <Modal
        transparent
        visible={isModalVisible}
        onRequestClose={() => closeModal()}>
        <View style={screenStyles.modalFullScreenBackground}>
          <Animated.View style={[screenStyles.userContainer, animatedStyle]}>
            <TouchableOpacity
              style={screenStyles.closeButton}
              onPress={() => closeModal()}>
              <FontAwesome name="close" size={25} />
            </TouchableOpacity>
            <Text style={screenStyles.title}>hi</Text>
            <View style={screenStyles.descContainer}></View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(CommentCard);
