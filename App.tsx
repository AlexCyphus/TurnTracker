
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AppContextProvider from './AppContextProvider';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';

export type PlayerType = {
  id: number,
  name: string
}

const App = () => (
  <AppContextProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <SettingsScreen />
    </SafeAreaView >
  </AppContextProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App