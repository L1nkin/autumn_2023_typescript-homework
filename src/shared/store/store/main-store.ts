import { Character } from '../../interfaces'
import { charactersReducer } from '../characters-reducer'
import { initialCharactersStore } from './characters-store'
import { DispatchType } from '../providers/store-provider/store-provider'

export type CharacterStore = {
  characters: Character[]
}

export const initialState = {
  characters: initialCharactersStore,
}

export const mainReducer = (state: CharacterStore, action: Required<DispatchType>) => ({
  characters: charactersReducer(state.characters, action),
})
