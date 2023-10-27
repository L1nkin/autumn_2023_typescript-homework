import React, { createContext, useReducer, useContext, ReactNode } from 'react'
import { initialState, mainReducer } from '../../store'
import { CharactersAction } from '../../characters-reducer/characters-reducer'
import { CharacterPayload } from '../../store/main-store'

export type ActionType = 'SET_CHARACTERS'

type ContextProvider = {
  state: CharacterPayload,
  dispatch: ({ type, payload }: CharactersAction) => void
}

export const Context = createContext<ContextProvider>({
  state: initialState,
  dispatch: function ({ type, payload }: CharactersAction): void {
    throw new Error('Function not implemented.');
  },
})

export const useStore = () => useContext(Context)


type Props = {
  children: ReactNode
}

export const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }} >{children}</Context.Provider>
  )
}

