import { Dispatch, SetStateAction } from 'react';

import { FAB, Stack } from "@react-native-material/core";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { PlayerType } from '../../App';
import SettingsScreenUserRow from './SettingsScreenPlayersListRow';
import SettingsScreenPlayersList from './SettingsScreenPlayersList';
import SettingsScreenAddPlayerButton from './SettingsScreenAddPlayerButton';

interface ISettingsScreenTimeButton { }

const SettingsScreenTimeButton: React.FC<ISettingsScreenTimeButton> = () => {
  return <TouchableHighlight style={{
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
  }}>
    <Text style={{
      fontSize: 20,
    }}>30</Text>
  </TouchableHighlight>
}

export default SettingsScreenTimeButton