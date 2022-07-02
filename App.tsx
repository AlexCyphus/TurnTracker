
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AppContextProvider, { useAppContext } from './AppContextProvider';
import Routes from './components/PlayScreen/Routes';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';

export type PlayerType = {
  id: number,
  name: string
}

const App = () => {
  return (
    <AppContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView >
    </AppContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App