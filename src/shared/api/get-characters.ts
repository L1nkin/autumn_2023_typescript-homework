import { makeRequest } from './make-request'
import { paths } from './consts'
import { Info, Character } from '../interfaces'

export const getCharacters = async (): Promise<Info<Character[]> | undefined> => {
  const response = await makeRequest(paths.characters)
  return response
}
