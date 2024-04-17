import { FlatProps } from "../interface"
import flatsJson from "../data/flat.json"

export type FlatsApiService = {
    fetchAllFlats(): FlatProps[] | undefined
    fetchOneFlat(flatid: string): FlatProps | undefined
  }
  
  export const FlatJsonFile: FlatsApiService = {
    fetchAllFlats: () => {
      return flatsJson
    },
    fetchOneFlat: (flatId) => {
      return flatsJson?.find((flat) => flat.id === flatId)
    },
  }