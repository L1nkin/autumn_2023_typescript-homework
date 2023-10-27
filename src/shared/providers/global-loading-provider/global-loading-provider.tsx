import React, { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react'

export type GlobalContextType = {
  loaders: LoaderState;
  setGlobalLoading: ({ key, isLoading }: LoaderModel) => void;
  removeGlobalLoading: (key: string) => void;
}

export const GlobalLoadingContext = createContext<GlobalContextType>({
  loaders: {},
  setGlobalLoading: function ({ key, isLoading }: LoaderModel): void {
    throw new Error('Function not implemented.');
  },
  removeGlobalLoading: function (key: string): void {
    throw new Error('Function not implemented.');
  }
})

type GlobalLoadingProviderProps = {
  children: ReactNode
}

type LoaderState = Record<string, boolean>

type LoaderModel = {
  key: string,
  isLoading: boolean
}

export const GlobalLoadingProvider = ({ children }: GlobalLoadingProviderProps) => {
  const [loaders, setLoader] = useState<LoaderState>({})

  const setGlobalLoading = useCallback(({ key, isLoading }: LoaderModel) => {
    setLoader((prevLoaders: LoaderState) => ({ ...prevLoaders, [key]: isLoading }))
  }, [])

  const removeGlobalLoading = useCallback(
    (key: string) => {
      if (!loaders[key]) {
        return
      }

      const newLoaders = { ...loaders }
      delete newLoaders[key]
    },
    [loaders],
  )

  useEffect(() => {
    console.log(loaders)
  })

  const value = useMemo<GlobalContextType>(
    () => ({
      loaders,
      setGlobalLoading,
      removeGlobalLoading,
    }),
    [loaders, setGlobalLoading, removeGlobalLoading],
  )

  return (
    <GlobalLoadingContext.Provider value={value}>
      {children}
    </GlobalLoadingContext.Provider>
  )
}
