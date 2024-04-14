import { type ReactNode, useRef } from 'react'
import { FlatStore } from '../store/flat.slice'
import { type StoreApi } from 'zustand'
import { createFlatSlice } from '../store/flat.slice'
import StoreContext from './context'

export interface FlatStoreProviderProps {
  children: ReactNode
}

export const FlatStoreProvider = ({
  children,
}: FlatStoreProviderProps) => {
  const storeRef = useRef<StoreApi<FlatStore>>()
  if (!storeRef.current) {
    storeRef.current = createFlatSlice()
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}