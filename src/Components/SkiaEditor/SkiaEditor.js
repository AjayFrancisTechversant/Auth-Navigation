import {TouchableOpacity, View} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import {Canvas, Image, Path, useImage} from '@shopify/react-native-skia';
import {runOnJS} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import ColorPalette from '../../Assets/Themes/ColorPalette';

const SkiaEditor = ({setIsEditing, image}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const [paths, setPaths] = useState([]);
  const pathsRef = useRef(paths);

  const addNewPath = useCallback((x, y) => {
    setPaths(prevPaths => {
      const newPath = {segments: [`M ${x} ${y}`], color: '#06d6a0'};
      pathsRef.current = [...prevPaths, newPath];
      return pathsRef.current;
    });
  }, []);

  const updatePath = useCallback((x, y) => {
    setPaths(prevPaths => {
      const newPaths = [...prevPaths];
      const index = newPaths.length - 1;
      if (newPaths[index]?.segments) {
        newPaths[index].segments.push(`L ${x} ${y}`);
      }
      pathsRef.current = newPaths;
      return newPaths;
    });
  }, []);

  const clearLastPath = useCallback(() => {
    setPaths(prevPaths => {
      const newPaths = prevPaths.slice(0, -1);
      pathsRef.current = newPaths;
      return newPaths;
    });
  }, []);

  const gestureDraw = Gesture.Pan()
    .onStart(g => {
      runOnJS(addNewPath)(g.x, g.y);
    })
    .onUpdate(g => {
      runOnJS(updatePath)(g.x, g.y);
    })
    .minDistance(1);

  return (
    <View style={screenStyles.canvas}>
      <TouchableOpacity
        onPress={() => setIsEditing(false)}
        style={screenStyles.goBackButton}>
        <AntDesign name="left" size={30} color={ColorPalette.white} />
      </TouchableOpacity>
      <View style={[screenStyles.canvasSkiaContainer, {borderColor: 'red'}]}>
        <GestureDetector gesture={gestureDraw}>
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <Canvas style={{flex: 1}}>
                <Image
                  image={image}
                  fit="contain"
                  x={0}
                  y={0}
                  width={screenContext.windowWidth}
                  height={screenContext.windowHeight}
                />
              {paths.map((p, index) => (
                <Path
                  key={index}
                  path={p.segments.join(' ')}
                  strokeWidth={3}
                  style="stroke"
                  color={p.color}
                />
              ))}
            </Canvas>
          </View>
        </GestureDetector>
        <TouchableOpacity
          onPress={clearLastPath}
          style={screenStyles.undoButton}>
          <FontAwesome5 name="undo-alt" size={30} color={ColorPalette.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(SkiaEditor);
