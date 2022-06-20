import { Dispatch, SetStateAction } from 'react';

import { FAB, Stack } from "@react-native-material/core";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { PlayerType } from '../../App';
import SettingsScreenUserRow from './SettingsScreenPlayersListRow';
import SettingsScreenPlayersList from './SettingsScreenPlayersList';
import SettingsScreenAddPlayerButton from './SettingsScreenAddPlayerButton';
import SettingsScreenTimeButton from './SettingsScreenTimeButton';





const SettingsScreen: React.FC = () => {
  return (
    <>
      <SettingsScreenPlayersList />
      <SettingsScreenTimeButton />
      <SettingsScreenAddPlayerButton />
    </>
  )
}

export default SettingsScreen