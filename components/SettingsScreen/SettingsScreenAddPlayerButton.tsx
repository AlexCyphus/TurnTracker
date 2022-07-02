import { Dispatch, SetStateAction } from 'react';

import { FAB, Stack } from "@react-native-material/core";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, ViewStyle } from 'react-native';
import { PlayerType } from '../../App';
import SettingsScreenUserRow from './SettingsScreenPlayersListRow';
import SettingsScreenPlayersList from './SettingsScreenPlayersList';
import { useAppContext } from '../../AppContextProvider';

const SettingsScreenAddPlayerButton: React.FC = () => {
  const { playersState: [, setPlayers] } = useAppContext()

  const handleAddPlayer = () => {
    setPlayers(oldPlayers => [...oldPlayers, {
      id: oldPlayers.length,
      name: "",
    }])
  }

  const style: ViewStyle = {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 100
  }

  return <TouchableHighlight
    onPress={handleAddPlayer}
    style={style}
  >
    <Icon name="add" />
  </TouchableHighlight>
}

export default SettingsScreenAddPlayerButton