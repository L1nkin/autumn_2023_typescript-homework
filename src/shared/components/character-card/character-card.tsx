import classnames from 'classnames'
import React, { useCallback } from 'react';

import styles from './character-card.module.scss'

const deadCharacterStatus = 'Dead'
const unknownCharacterStatus = 'unknown'

type CharacterCardProps = {
  imgUrl: string,
  name: string,
  status: string,
  species: string,
  gender: string,
  onClick(name: string): void,
  disabled?: boolean
}

export const CharacterCard = ({
  imgUrl,
  name,
  status,
  species,
  gender,
  onClick,
  disabled = false,
}: CharacterCardProps) => {

  const onCardClick = useCallback(() => {
    onClick(name)
  }, [name, onClick])

  return (
    <div
      className={classnames(styles.card, { [styles.disabled]: disabled })}
      onClick={onCardClick}
    >
      <div className={styles.image}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <div className={(styles.secondaryText, styles.status)}>
            <div
              className={classnames(styles.dot, {
                [styles.danger]: status === deadCharacterStatus,
                [styles.unknown]: status === unknownCharacterStatus,
              })}
            />
            <span>{status}</span>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.secondaryText}>Species:</div>
          <div>{species}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.secondaryText}>Gender:</div>
          <div>{gender}</div>
        </div>
      </div>
    </div>
  )
}
