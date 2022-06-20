import { Dispatch, SetStateAction } from 'react';

import { FAB, Stack } from "@react-native-material/core";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { PlayerType } from '../../App';
import SettingsScreenUserRow from './SettingsScreenPlayersListRow';
import SettingsScreenPlayersList from './SettingsScreenPlayersList';
import { useAppContext } from '../../AppContextProvider';

const SettingsScreenAddPlayerButton: React.FC = () => {
  const { playersState: [, setPlayers] } = useAppContext()

  return <Stack style={{ position: "absolute", bottom: 20, right: 20 }} >
    <FAB
      onPress={() => setPlayers(oldPlayers => [...oldPlayers, {
        id: oldPlayers.length,
        name: "",
      }])}
      size="default"
      icon={props => <Icon name="add" {...props} />}
    />
  </Stack>
}

export default SettingsScreenAddPlayerButton