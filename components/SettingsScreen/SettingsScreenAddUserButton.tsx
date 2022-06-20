import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="add" size={30} color="#900" />;

import { TouchableHighlight } from 'react-native'

interface ISettingsScreenAddUserButton { }

const SettingsScreenAddUserButton: React.FC<ISettingsScreenAddUserButton> = () => {
  return <TouchableHighlight></TouchableHighlight>
}

export default SettingsScreenAddUserButton