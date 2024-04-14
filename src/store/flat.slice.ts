import { StateCreator } from 'zustand'
import { FlatProps } from './interface'
import flats from '../data/flat.json'

export interface FlatState {
  flats: FlatProps[]
  getAllFlats: () => void
  getFlatById: (flatId: string) => void
  searchFlatById: (flatId: string) => void
}

export const createFlatSlice: StateCreator<FlatState> = (set, get) => ({
  flats: [],
  getAllFlats: async () => {
    const newFlats = await FlatJsonFile.fetchAllFlats()
    set(() => ({ flats: newFlats }))
  },
  getFlatById: async (flatId: string) => {
    const data = get().flats
    const oneFlat = data.find((flat) => flat.id === flatId)
    const newFlat = oneFlat ? [oneFlat] : []
    set(() => ({ flats: newFlat }))
  },
  searchFlatById: async (flatId: string) => {
    const oneFlat = await FlatJsonFile.fetchOneFlat(flatId)
    const newFlat = oneFlat ? [oneFlat] : []
    set(() => ({ flats: newFlat }))
  },
})

export type FlatsApiService = {
  fetchAllFlats(): Promise<FlatProps[] | undefined>
  fetchOneFlat(flatId: string): Promise<FlatProps | undefined>
}

export const FlatJsonFile: FlatsApiService = {
  fetchAllFlats: async () => {
    return flats
  },
  fetchOneFlat: async (flatId) => {
    return flats.find((element) => element.id === flatId)
  },
}
