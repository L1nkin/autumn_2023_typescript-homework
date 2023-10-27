import classnames from 'classnames'
import React, { ReactNode } from 'react';

import { Loader } from '../loader'
import styles from './loader-layout.module.scss'
import { useGlobalLoading } from '../../providers/global-loading-provider'

type Props = {
  children: ReactNode
}

export const LoaderLayout = ({ children }: Props) => {
  const { isLoading } = useGlobalLoading()

  return (
    <>
      {children}
      <div
        className={classnames(styles.wrapper, { [styles.visible]: isLoading })}
      >
        <Loader />
      </div>
    </>
  )
}
