import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './Style';
import {Calendar, CalendarUtils} from 'react-native-calendars';

const CURRENT_DATE = CalendarUtils.getCalendarDateString(Date())

const Calender = () => {
    const [selected, setSelected] = useState();
  
    const onDayPress = useCallback((day) => {
      setSelected(day.dateString);
    }, []);
  
    const marked = useMemo(() => {
      return {
        [CURRENT_DATE]: {
          dotColor: 'red',
          marked: true
        },
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: 'orange',
          selectedTextColor: 'red'
        }
      };
    }, [selected]);
    const screenContext = useScreenContext();
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
    );
    return (
        <View>
            <Text style={screenStyles.text}>Calendar with selectable date</Text>
            <Calendar
                // testID={testIDs.calendars.FIRST}
                enableSwipeMonths
                current={CURRENT_DATE}
                style={screenStyles.calendar}
                onDayPress={onDayPress}
                markedDates={marked}
            />
        </View>
    )
}

export default Calender