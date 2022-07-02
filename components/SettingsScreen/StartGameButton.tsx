import { useAppContext } from '../../AppContextProvider';
import { Text, TouchableHighlight, ViewStyle } from 'react-native';

interface IStartGameButton { }

const StartGameButton: React.FC<IStartGameButton> = () => {
  const { screenState: [, setScreen] } = useAppContext()

  const handleStartGame = () => {
    setScreen("play")
  }

  const style: ViewStyle = {
    height: 60,
    backgroundColor: "blue",
    width: "fit-content"
  }

  return (
    <TouchableHighlight
      onPress={handleStartGame}
      style={style}
    >
      <Text>Start Game</Text>
    </TouchableHighlight>)
}

export default StartGameButton