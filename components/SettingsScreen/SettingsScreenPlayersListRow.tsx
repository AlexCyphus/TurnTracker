import { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PlayerType } from '../../App';
import { pastels } from '../../constants/colors';

interface ISettingsScreenPlayersListRow {
  player: PlayerType
  setPlayers: Dispatch<SetStateAction<PlayerType[]>>
  index: number
}

const SettingsScreenPlayersListRow: React.FC<ISettingsScreenPlayersListRow> = ({
  setPlayers, player, index
}) => {
  const removePlayer = () => {
    setPlayers(oldPlayers => {
      const newPlayers = [...oldPlayers]
      newPlayers.splice(index, 1)
      return newPlayers
    })
  }

  return <TouchableHighlight>
    <View style={{
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 5,
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      shadowOffset: {
        width: 15,
        height: -15
      },
      marginTop: 10,
      shadowRadius: 20,
      shadowOpacity: 0.1,
      shadowColor: "red",
      backgroundColor: 'white'
    }}>
      <View style={{
        borderRadius: 40,
        backgroundColor: pastels[player.id],
        height: 80,
        width: 80,
        marginRight: 20
      }} />
      <TextInput placeholder="Players name" style={{ fontSize: 25 }} />
      <TouchableHighlight
        onPress={removePlayer}
      >
        <Icon name="close" size={20} />
      </TouchableHighlight>
    </View>
  </TouchableHighlight>
}

export default SettingsScreenPlayersListRow