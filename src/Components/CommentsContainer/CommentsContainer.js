import {View, Text, VirtualizedList, ActivityIndicator} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const CommentsContainer = ({loading, comments}) => {
  const emptyComponent = () => {
    return (
      <View style={screenStyles.emptyComponentContainer}>
        <Text style={screenStyles.emptyComponentText}> No comments :(</Text>
      </View>
    );
  };

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  return (
    <View style={[screenStyles.commentsContainer]}>
      {!loading ? (
        <VirtualizedList
          data={comments}
          getItemCount={data => data.length}
          getItem={(data, index) => data[index]}
          renderItem={({item}) => (
            <View style={screenStyles.commentCard}>
              <Text style={screenStyles.commentTitle}>{item.id}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
          ListEmptyComponent={emptyComponent}
          ListHeaderComponent={<View style={screenStyles.separator}></View>}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
          persistentScrollbar
          maxToRenderPerBatch={20}
          windowSize={11}
          updateCellsBatchingPeriod={100}
          removeClippedSubviews={true}
        />
      ) : (
        <View style={screenStyles.loadingContainer}>
          <ActivityIndicator size={50} color={ColorPalette.white} />
        </View>
      )}
    </View>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
};

export default React.memo(CommentsContainer, areEqual);
