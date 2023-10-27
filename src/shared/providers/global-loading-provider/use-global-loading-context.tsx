import { useContext } from 'react'
import { GlobalContextType, GlobalLoadingContext } from './global-loading-provider'

export const useGlobalLoadingContext = () => useContext<GlobalContextType>(GlobalLoadingContext)
