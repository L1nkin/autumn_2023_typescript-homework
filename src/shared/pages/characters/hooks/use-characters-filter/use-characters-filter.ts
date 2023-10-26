import { useMemo } from 'react'
import { Character } from '../../../../interfaces'

export const useCharactersFilter = (characters: Character[], filterText: string) => {
  return useMemo(() => {
    if (!filterText) {
      return characters
    }

    return characters.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    )
  }, [characters, filterText])
}