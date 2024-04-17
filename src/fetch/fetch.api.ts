import { FlatProps } from '../interface'

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
