import classnames from 'classnames'
import React, { useEffect } from 'react';

import { CharacterCard } from '../character-card'
import styles from './characters-list.module.scss'

export const CharactersList = ({ characters, className }: any) => {

  useEffect(() => {
    console.log(className)
  })
  return (
    <ul className={classnames(styles.wrapper, className)}>
      {characters.map(({ id, name, image, status, species, gender }: any) => (
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
