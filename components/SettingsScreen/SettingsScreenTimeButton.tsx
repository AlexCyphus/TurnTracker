
import { StyleProp, Text, TouchableHighlight, ViewStyle } from 'react-native';

const SettingsScreenTimeButtonStyles: StyleProp<ViewStyle> = {
  width: 60,
  height: 60,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: 20,
  bottom: 20,
  borderColor: "black",
  backgroundColor: "white",
  borderRadius: 400
}

const SettingsScreenTimeButton: React.FC = () => {
  return <TouchableHighlight style={SettingsScreenTimeButtonStyles}>
    <Text style={{ fontSize: 20 }}>30</Text>
  </TouchableHighlight>
}

export default SettingsScreenTimeButton