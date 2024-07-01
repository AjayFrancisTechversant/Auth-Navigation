import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  Canvas,
  Path,
  Group,
  Circle,
} from '@shopify/react-native-skia';
import {useSharedValue, withDecay, runOnJS} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import ColorPalette from '../../Assets/Themes/ColorPalette';


const Skia = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const width = screenContext.windowWidth;
  const height = screenContext.windowHeight;
  const translateX = useSharedValue(width / 2);
  const translateY = useSharedValue(height / 4);
  const [paths, setPaths] = useState([]);

  const leftBoundary = 0;
  const rightBoundary = width;
  const topBoundary = 0;
  const bottomBoundary = height / 2;

  const addNewPath = (x, y) => {
    setPaths(prevPaths => [
      ...prevPaths,
      {
        segments: [`M ${x} ${y}`],
        color: '#06d6a0',
      }
    ]);
  };

  const updatePath = (x, y) => {
    setPaths(prevPaths => {
      const newPaths = [...prevPaths];
      const index = newPaths.length - 1;
      if (newPaths[index]?.segments) {
        newPaths[index].segments.push(`L ${x} ${y}`);
      }
      return newPaths;
    });
  };
  const clearPaths = () => {
    setPaths([]);
  };
console.log(paths);
  const pan = Gesture.Pan()
    .onStart(g => {
      runOnJS(addNewPath)(g.x, g.y);
    })
    .onUpdate(g => {
      runOnJS(updatePath)(g.x, g.y);
    })
    .minDistance(1);

  const gesture = Gesture.Pan()
    .onChange(e => {
      translateX.value += e.changeX;
      translateY.value += e.changeY;
    })
    .onEnd(e => {
      translateX.value = withDecay({
        velocity: e.velocityX / 4,
        clamp: [leftBoundary, rightBoundary],
      });
      translateY.value = withDecay({
        velocity: e.velocityY / 4,
        clamp: [topBoundary, bottomBoundary],
      });
    });

  return (
    <View style={screenStyles.canvas}>
      <View style={[screenStyles.canvasSkiaContainer, {borderColor: 'red'}]}>
        <GestureDetector gesture={pan}>
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <Canvas style={{flex: 1}}>
              {paths.map((p, index) => (
                <Path
                  key={index}
                  path={p.segments.join(' ')}
                  strokeWidth={3}
                  style="stroke"
                  color={'red'}
                />
              ))}
            </Canvas>
          </View>
        </GestureDetector>
        <TouchableOpacity onPress={clearPaths} style={screenStyles.undoButton}>
          <FontAwesome5 name='undo-alt' size={30} color={ColorPalette.white}/>
        </TouchableOpacity>
      </View>
      <View style={screenStyles.canvasSkiaContainer}>
        <GestureDetector gesture={gesture}>
          <Canvas style={screenStyles.canvasSkia}>
            <Group>
              <Circle cx={translateX} cy={translateY} r={20} color="#3E3E" />
            </Group>
          </Canvas>
        </GestureDetector>
      </View>
    </View>
  );
};

export default Skia;
