import { StateCreator } from 'zustand'
import { FlatProps } from './interface'
import flats from '../data/flat.json'

export type FlatState = {
  flats: FlatProps[] | undefined
  flat: FlatProps | undefined
}
export type FlatActions = {
  getAllFlats: () => void
  getFlatInStateById: (flatId: string) => void
}

export type FlatStore = FlatState & FlatActions

export const createFlatSlice:StateCreator<
FlatStore,
[],
[],
FlatStore
> = (set, get) => ({
  flats: undefined,
  flat: undefined,
  getAllFlats: async () => {
    const newFlats = await FlatJsonFile.fetchAllFlats()
    set(() => ({ flats: newFlats }))
  },
  getFlatInStateById: async (flatId: string) => {
    const getFlats = get().flats
    const flatById = getFlats?.find((flat) => flat.id === flatId)
    set(() => ({ flat: flatById }))
  },
})


export type FlatsApiService = {
  fetchAllFlats(): FlatProps[] | undefined
}

export const FlatJsonFile: FlatsApiService = {
  fetchAllFlats: () => {
    return flats
  },
}
