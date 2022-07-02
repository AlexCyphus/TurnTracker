import {
  createContext, Dispatch, SetStateAction, useContext, useMemo, useState,
} from 'react'
import { PlayerType } from './App'

type screenNameType = "settings" | "timer" | "play"

interface IAppContext {
  playersState: [PlayerType[], Dispatch<SetStateAction<PlayerType[]>>],
  screenState: [screenNameType, Dispatch<SetStateAction<screenNameType>>]
  timerLength: [number, Dispatch<SetStateAction<number>>]
}

const AppContext = createContext({} as IAppContext)

const AppContextProvider: React.FC = ({ children }) => {

  const values = {
    playersState: useState<PlayerType[]>([{ id: 0, name: "" }]),
    screenState: useState<screenNameType>("settings"),
    timerLength: useState(60)

  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)
