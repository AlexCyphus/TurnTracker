import { Dispatch, SetStateAction } from 'react';
import { ScrollView, View } from 'react-native';
import { PlayerType } from '../../App';
import { useAppContext } from '../../AppContextProvider';
import SettingsScreenPlayersListRow from "./SettingsScreenPlayersListRow"

const SettingsScreenPlayersList: React.FC = () => {
  const { playersState: [players, setPlayers] } = useAppContext()

  return (
    <ScrollView style={{ backgroundColor: "lightblue", flex: 1, paddingVertical: 30, paddingHorizontal: 10 }}>
      {players.map((player, index) => <SettingsScreenPlayersListRow
        setPlayers={setPlayers}
        player={player}
        index={index}
        key={player.id}
      />)}
    </ScrollView>
  )
}

export default SettingsScreenPlayersList