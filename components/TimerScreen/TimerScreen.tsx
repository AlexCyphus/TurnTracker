import { useAppContext } from '../../AppContextProvider';
import { View, Text, ViewStyle } from 'react-native'

const TimerScreen: React.FC = () => {
  const style: ViewStyle = {
    width: "screen",
    height: "screen",
    backgroundColor: "black"
  }

  const {
    timerLength: [timerLength, setTimerLength],
    screenState: [, setScreen]
  } = useAppContext()

  const handleTimerChange = (newTimerLength: number) => {
    setTimerLength(timerLength)
    setScreen("settings")
  }

  return (
    <View>
      <Text>Turn Length</Text>
    </View>
  )
}

export default TimerScreen