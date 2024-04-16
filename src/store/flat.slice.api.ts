import { StateCreator } from 'zustand'
import { FlatProps } from './interface'

export type FlatState = {
  flats: FlatProps[] | undefined
  flat: FlatProps | undefined
}
export type FlatActions = {
  getAllFlats: () => void
  getFlatById: (flatId: string) => void
}

export type FlatStore = FlatState & FlatActions

export const createFlatSlice: StateCreator<FlatStore, [], [], FlatStore> = (
  set
) => ({
  flats: undefined,
  flat: undefined,
  getAllFlats: async () => {
    const allFlats = await FlatFetchAPI.fetchAllFlats()
    set(() => ({ flats: allFlats }))
  },
  getFlatById: async (flatId: string) => {
    const flatById = await FlatFetchAPI.fetchOneFlat(flatId)
    set(() => ({ flat: flatById }))
  },
})

export type FlatsApiService = {
  fetchAllFlats(): Promise<FlatProps[] | undefined>
  fetchOneFlat(flatId: string): Promise<FlatProps | undefined>
}

export const FlatFetchAPI: FlatsApiService = {
  fetchAllFlats: async () => {
    try {
      const url = import.meta.env.VITE_REACT_API_URL
      const response = await fetch(url)
      return response.json()
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  fetchOneFlat: async (flatId) => {
    try {
      const url = import.meta.env.VITE_REACT_API_URL
      const response = await fetch(`${url}/${flatId}`)
      return response.json()
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
