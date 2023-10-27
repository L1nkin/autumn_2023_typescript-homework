import { Character } from "../../interfaces"
import { ActionType } from "../providers/store-provider/store-provider"
import { CharacterPayload } from "../store/main-store"

type CharactersActionType<Type extends ActionType, Payload> = {
  type: Type
  payload: Payload
}

export type CharactersAction = CharactersActionType<ActionType, CharacterPayload>

export const charactersReducerActions = {
  setCharacters: 'SET_CHARACTERS',
}

export const charactersReducer = (state: Character[], action: CharactersAction) => {
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
