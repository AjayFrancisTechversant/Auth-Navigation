import {TouchableOpacity, View} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import {Canvas, Group, Image, Path, useImage} from '@shopify/react-native-skia';
import {runOnJS} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './Style';
import ColorPalette from '../../Assets/Themes/ColorPalette';
import StaticVariables from '../../Preferences/StaticVariables';

const SkiaEditor = ({setIsEditing, image}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const [paths, setPaths] = useState(StaticVariables.EMPTY_ARRAY);
  const pathsRef = useRef(paths);
  const [isDrawing, setIsDrawing] = useState(false);

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

  const handlePenButton = () => {
    setIsDrawing(true);
  };
  const clearLastPath = useCallback(() => {
    setPaths(prevPaths => {
      const newPaths = prevPaths.slice(0, -1);
      pathsRef.current = newPaths;
      return newPaths;
    });
  }, []);

  const handleCancelDrawing = () => {
    setPaths(StaticVariables.EMPTY_ARRAY);
    setIsDrawing(false);
  };
  const handleFinishDrawing = () => {
    setIsDrawing(false);
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
      <View style={screenStyles.headerContents}>
        <TouchableOpacity onPress={() => setIsEditing(false)}>
          <AntDesign name="left" size={30} color={ColorPalette.white} />
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => }
        >
          <Entypo name="save" size={30} color={ColorPalette.white} />
        </TouchableOpacity>
      </View>
      <View style={[screenStyles.canvasSkiaContainer]}>
        {isDrawing ? (
          <GestureDetector gesture={gestureDraw}>
            <Canvas style={screenStyles.canvasSkia}>
              <Group>
                {image && (
                  <Image
                    image={image}
                    fit="contain"
                    x={0}
                    y={0}
                    width={screenContext.windowWidth}
                    height={500}
                  />
                )}
                {paths.map((p, index) => (
                  <Path
                    key={index}
                    path={p.segments.join(' ')}
                    strokeWidth={3}
                    style="stroke"
                    color={p.color}
                  />
                ))}
              </Group>
            </Canvas>
          </GestureDetector>
        ) : (
          <Canvas style={screenStyles.canvasSkia}>
            <Group>
              {image && (
                <Image
                  image={image}
                  fit="contain"
                  x={0}
                  y={0}
                  width={screenContext.windowWidth}
                  height={500}
                />
              )}
              {paths.map((p, index) => (
                <Path
                  key={index}
                  path={p.segments.join(' ')}
                  strokeWidth={3}
                  style="stroke"
                  color={p.color}
                />
              ))}
            </Group>
          </Canvas>
        )}
      </View>
      {isDrawing ? (
        <View style={screenStyles.toolsContainer}>
          <TouchableOpacity onPress={clearLastPath}>
            <FontAwesome5
              name="undo-alt"
              size={30}
              color={ColorPalette.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancelDrawing}>
            <MaterialCommunityIcons
              name="close"
              size={30}
              color={ColorPalette.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFinishDrawing}>
            <MaterialCommunityIcons
              name="check"
              size={30}
              color={ColorPalette.white}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={screenStyles.toolsContainer}>
          <TouchableOpacity onPress={handlePenButton}>
            <FontAwesome5 name="pen" size={30} color={ColorPalette.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="blur"
              size={30}
              color={ColorPalette.white}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(SkiaEditor);
