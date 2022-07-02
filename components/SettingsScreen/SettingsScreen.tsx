
import { TouchableHighlight, Text } from 'react-native';
import SettingsScreenPlayersList from './SettingsScreenPlayersList';
import Footer from './Footer';


const SettingsScreen: React.FC = () => {
  return (
    <>
      <SettingsScreenPlayersList />
      <Footer />
    </>
  )
}

export default SettingsScreen