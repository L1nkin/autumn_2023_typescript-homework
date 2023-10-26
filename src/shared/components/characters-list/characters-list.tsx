import classnames from 'classnames'
import React from 'react';

import { CharacterCard } from '../character-card'
import styles from './characters-list.module.scss'
import { Character } from '../../interfaces';

type Props = {
  characters: Character[]
  className: string
}

export const CharactersList = ({ characters, className }: Props) => {
  return (
    <ul className={classnames(styles.wrapper, className)}>
      {characters.map(({ id, name, image, status, species, gender }) => (
        <li key={id}>
          <CharacterCard
            name={name}
            imgUrl={image}
            status={status}
            species={species}
            gender={gender}
            onClick={() => (console.log(name))}
            disabled={true}
          />
        </li>
      ))}
    </ul>
  )
}
