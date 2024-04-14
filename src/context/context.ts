import { createContext, useContext } from 'react'
import { FlatStore } from '../store/flat.slice'
import { type StoreApi, useStore } from 'zustand'

export const StoreContext = createContext<StoreApi<FlatStore> | null>(null)

export const useFlatStore = <T>(selector: (store: FlatStore) => T): T => {
  const flatStoreContext = useContext(StoreContext)

  if (!flatStoreContext) {
    throw new Error(`useFlatStore must be use within FlatStoreProvider`)
  }

  return useStore(flatStoreContext, selector)
}

export default StoreContext
