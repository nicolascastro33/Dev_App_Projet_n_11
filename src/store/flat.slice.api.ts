import { StateCreator } from 'zustand'
import { FlatProps } from './interface'

export interface FlatState {
  flats: FlatProps[]
  getAllFlats: () => void
  getFlatById: (flatId: string) => void
}

export const createFlatSlice: StateCreator<FlatState> = (set, get) => ({
  flats: [],
  getAllFlats: async () => {
    const data = get().flats
    if (data && data.length <= 1) {
      const newFlats = await FlatFetchAPI.fetchAllFlats()
      set(() => ({ flats: newFlats }))
    }
  },
  getFlatById: async (flatId: string) => {
    let newFlat: FlatProps[] | undefined = []
    const data = get().flats

    if (data && data.length > 1) {
      const oneFlat = data.find((flat) => flat.id === flatId)
      newFlat = oneFlat ? [oneFlat] : []
      set(() => ({ flats: newFlat }))
      return
    }

    if (data && data.length === 1 && data[0].id !== flatId) {
      const oneFlat = await FlatFetchAPI.fetchOneFlat(flatId)
      newFlat = oneFlat ? [oneFlat] : []
      set(() => ({ flats: newFlat }))
      return
    }

    set(() => ({ flats: [] }))
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
      return await response.json
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  fetchOneFlat: async (flatId) => {
    try {
      const url = import.meta.env.VITE_REACT_API_URL
      const response = await fetch(`${url}/${flatId}`)
      return await response.json
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
