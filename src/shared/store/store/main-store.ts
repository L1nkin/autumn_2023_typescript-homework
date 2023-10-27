import { Character } from '../../interfaces'
import { charactersReducer } from '../characters-reducer'
import { CharactersAction } from '../characters-reducer/characters-reducer'
import { initialCharactersStore } from './characters-store'

export type CharacterPayload = {
  characters: Character[]
}

export const initialState = {
  characters: initialCharactersStore,
}

export const mainReducer = (state: CharacterPayload, action: CharactersAction) => ({
  characters: charactersReducer(state.characters, action),
})
