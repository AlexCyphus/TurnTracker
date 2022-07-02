
import { TouchableHighlight, Text, SafeAreaView, ViewStyle } from 'react-native';
import SettingsScreenAddPlayerButton from './SettingsScreenAddPlayerButton';
import SettingsScreenTimeButton from './SettingsScreenTimeButton';
import StartGameButton from './StartGameButton';

const Footer: React.FC = () => {
  const style: ViewStyle = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "fit-content"
  }

  return <SafeAreaView style={style}>
    <SettingsScreenTimeButton />
    <StartGameButton />
    <SettingsScreenAddPlayerButton />
  </SafeAreaView>
}

export default Footer