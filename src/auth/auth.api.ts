import { FlatsJsonService, FlatsApiService } from './auth.service'
import { FlatProps } from '../interface'
import flats from '../data/flat.json'
import { create } from 'zustand'

type State = {
  data: FlatProps[] | FlatProps | undefined
}
type Actions = {
  getAllFlats: (flats: FlatProps[]) => void
  getFlatById: (flats: FlatProps[], id: string) => void
}

const getFlatById = (flats: FlatProps[], id: string) => {
  return flats?.find((element) => element.id === id)
}

const useStore = create<State & Actions>((set) => ({
  data: undefined,
  getAllFlats: (flats) => set(() => ({ data: flats })),
  getFlatById: (flats, id) =>
    set(() => ({ data: getFlatById(flats, id)})),
}))

export const FlatJsonFile: FlatsJsonService = {
  fetchAllFlats: async () => {
    try {
      const response = flats
      return await response
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  fetchOneFlat: async (id) => {
    try {
      const response = flats?.find((element) => element.id === id)
      return await response
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}

// TODO: d'utiliser le système d'environnement (à l'aide du système .env / dotenv)
// https://vitejs.dev/guide/env-and-mode.html
export const FetchFlatAPI: FlatsApiService = {
  fetchAllFlats: async () => {
    try {
      const response = await fetch(import.meta.env.VITE_REACT_API_URL)
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  fetchOneFlat: async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_API_URL}?${id}`
      )
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
