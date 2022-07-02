
import { StyleProp, Text, TouchableHighlight, ViewStyle } from 'react-native';

const SettingsScreenTimeButtonStyles: StyleProp<ViewStyle> = {
  maxWidth: 60,
  maxHeight: 60,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  borderColor: "black",
  backgroundColor: "pink",
  borderRadius: 400
}

const SettingsScreenTimeButton: React.FC = () => {
  return <TouchableHighlight style={SettingsScreenTimeButtonStyles}>
    <Text style={{ fontSize: 20 }}>30</Text>
  </TouchableHighlight>
}

export default SettingsScreenTimeButton