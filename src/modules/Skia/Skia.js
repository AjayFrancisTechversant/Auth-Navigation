import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Canvas, Path, Group, Circle} from '@shopify/react-native-skia';
import {useSharedValue, withDecay, runOnJS} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import ColorPalette from '../../Assets/Themes/ColorPalette';

function SkiaDrag(props) {
  return (
    <View style={props.screenStyles.canvasSkiaContainer}>
      <GestureDetector gesture={props.gestureDrag}>
        <Canvas style={props.screenStyles.canvasSkia}>
          <Group>
            <Circle
              cx={props.translateX}
              cy={props.translateY}
              r={20}
              color="#3E3E"
            />
          </Group>
        </Canvas>
      </GestureDetector>
    </View>
  );
}

const Skia = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const [paths, setPaths] = useState([]);

 

  const addNewPath = (x, y) => {
    setPaths(prevPaths => [
      ...prevPaths,
      {
        segments: [`M ${x} ${y}`],
        color: '#06d6a0',
      },
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
    setPaths(prevPaths => prevPaths.slice(0, prevPaths.length - 1));
  };
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
      <View style={[screenStyles.canvasSkiaContainer, {borderColor: 'red'}]}>
        <GestureDetector gesture={gestureDraw}>
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <Canvas style={{flex: 1}}>
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
        <TouchableOpacity onPress={clearPaths} style={screenStyles.undoButton}>
          <FontAwesome5 name="undo-alt" size={30} color={ColorPalette.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Skia;
