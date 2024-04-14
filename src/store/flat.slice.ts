// import { StateCreator } from 'zustand'
import { createStore } from 'zustand'
import { FlatProps } from './interface'
import flats from '../data/flat.json'

export type FlatState = {
  flats: FlatProps[] | undefined
  flat: FlatProps | undefined
}

export type FlatActions = {
  getAllFlats: () => void
  getFlatInStateById: (flatId: string) => void
  getFlatById: (flatId: string) => void
}

export type FlatStore = FlatState & FlatActions

export const defaultInitState: FlatState = {
  flats: undefined,
  flat:undefined,
}

export const createFlatSlice = (initState: FlatState = defaultInitState) => {
  return createStore<FlatStore>()((set, get) => ({
    ...initState,
    getAllFlats: async () => {
      const newFlats = await FlatJsonFile.fetchAllFlats()
      set(() => ({ flats: newFlats }))
    },
    getFlatInStateById: async (flatId: string) => {
      const getFlats = await get().flats
      const flatById = await getFlats?.find((flat) => flat.id === flatId)
      set(() => ({ flat: flatById }))
    },
    getFlatById: async (flatId: string) => {
      const allFlats = await FlatJsonFile.fetchAllFlats()
      const flatById = await allFlats?.find((flat) => flat.id === flatId)
      set(() => ({ flat: flatById }))
    },
  }))
}

// export const createFlatSlice: StateCreator<FlatStore> = (set, get) => ({
//   flats: undefined,
//   flat: undefined,
//   getAllFlats: async () => {
//     const newFlats = await FlatJsonFile.fetchAllFlats()
//     set(() => ({ flats: newFlats }))
//   },
//   getFlatInStateById: async (flatId: string) => {
//     const getFlats = await get().flats
//     const flatById = await getFlats?.find((flat) => flat.id === flatId)
//     set(() => ({ flat: flatById }))
//   },
//   getFlatById:async(flatId:string)=>{
//     const allFlats = await FlatJsonFile.fetchAllFlats()
//     const flatById = await allFlats?.find((flat) => flat.id === flatId)
//     set(() => ({ flat: flatById }))

//   }
// })

export type FlatsApiService = {
  fetchAllFlats(): Promise<FlatProps[] | undefined>
}

export const FlatJsonFile: FlatsApiService = {
  fetchAllFlats: async () => {
    return flats
  },
}
