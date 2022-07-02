import React from 'react'
import { useAppContext } from '../../AppContextProvider'
import SettingsScreen from '../SettingsScreen/SettingsScreen'
import TimerScreen from '../TimerScreen/TimerScreen'
import PlayScreen from './PlayScreen'

interface IRoutes { }

const Routes: React.FC<IRoutes> = () => {
  const { screenState: [screenState] } = useAppContext()

  switch (screenState) {
    case "play":
      return <PlayScreen />
    case "timer":
      return <TimerScreen />
    case "settings":
      return <SettingsScreen />
    default:
      return <SettingsScreen />
  }
}

export default Routes