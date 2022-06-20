
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';
import AppContextProvider from './AppContextProvider';

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