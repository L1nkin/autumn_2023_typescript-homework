import { useEffect, useState } from 'react'
import { getCharacters } from '../../get-characters'
import { Character, Info } from '../../../interfaces'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCharacters()
      .then((characters: Info<Character[]>) => {
        setCharacters(characters.results!)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data: characters, error, loading }
}
