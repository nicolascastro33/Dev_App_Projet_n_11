import { createContext, useContext } from 'react'
import { FlatState } from '../store/flat.slice'
import { type StoreApi, useStore } from 'zustand'

const StoreContext = createContext<StoreApi<FlatState> | null>(null)

export const useFlatStore = <T>(selector: (store: FlatState) => T): T => {
  const flatStoreContext = useContext(StoreContext)

  if (!flatStoreContext) {
    throw new Error(`useFlatStore must be use within CounterStoreProvider`)
  }

  return useStore(flatStoreContext, selector)
}

export default StoreContext
