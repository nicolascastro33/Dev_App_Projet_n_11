import { FlatProps } from '../interface'

export type FlatsJsonService = {
  fetchAllFlats(): Promise<FlatProps[] | undefined>
  fetchOneFlat(flatId: string): Promise<FlatProps | undefined>
}

export type FlatsApiService = {
  fetchAllFlats(): Promise<Response|undefined>
  fetchOneFlat(flatId: string): Promise<Response|undefined>
}
