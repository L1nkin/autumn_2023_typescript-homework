import React, { createContext, useReducer, useContext, ReactNode } from 'react'
import { initialState, mainReducer } from '../../store'
import { CharacterStore } from '../../store/main-store'

export type DispatchType = {
  type: string,
  payload: CharacterStore
}

type ContextProvider = {
  state: CharacterStore,
  dispatch: ({ type, payload }: DispatchType) => void
}

export const Context = createContext<ContextProvider>({
  state: initialState,
  dispatch: function ({ type, payload }: DispatchType): void {
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

