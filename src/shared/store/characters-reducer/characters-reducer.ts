import { Character } from "../../interfaces"
import { DispatchType } from "../providers/store-provider/store-provider"

const SET_CHARACTERS = 'SET_CHARACTERS'

export const charactersReducerActions = {
  setCharacters: SET_CHARACTERS,
}

export const charactersReducer = (state: Character[], action: Required<DispatchType>) => {
  switch (action.type) {
    case charactersReducerActions.setCharacters:
      const { characters } = action.payload

      return characters.reduce((acc: Character[], character) => {
        acc[character.id] = character

        return acc
      }, [])
    default:
      return state
  }
}
