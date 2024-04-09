import { FlatsJsonService, FlatsApiService } from './auth.service'
import { FlatProps } from '../utils/interface'
import flats from '../data/flat.json'
import { create } from 'zustand'


export const FlatJsonFile: FlatsJsonService = {
  FetchAllFlats: async () => {
    try {
      return flats 
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  FetchOneFlat: async (flatId) => {
    try {
      return flats?.find((element) => element.id === flatId)
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}

// TODO: d'utiliser le système d'environnement (à l'aide du système .env / dotenv)
// https://vitejs.dev/guide/env-and-mode.html
type State = {
  data: FlatProps[] | FlatProps | undefined
}
type Actions = {
  getAllFlats: (url: string) => Promise<void|FlatProps[]>
  getFlatById: (url: string, id: string) => Promise<void|FlatProps>
}

const useFlatStore = create<State & Actions>((set) => ({
  data: undefined,
  getAllFlats: async (url) => {
    const response = await fetch(url)
    const flats = await response.json()
    set(() => ({ data:flats }))
  },
  getFlatById: async (url, flatId) => {
    const response = await fetch(`${url}?${flatId}`)
    const flat = await response.json()
    set(() => ({ data:flat }))
  },
}))


export const FlatFetchAPI: FlatsApiService = {
  FetchAllFlats: () => {
    try {
      const url = import.meta.env.VITE_REACT_API_URL
      return useFlatStore((state) => state.getAllFlats(url))
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  FetchOneFlat: (flatId) => {
    try {
      const url = import.meta.env.VITE_REACT_API_URL
      return useFlatStore((state) => state.getFlatById(url, flatId))
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
