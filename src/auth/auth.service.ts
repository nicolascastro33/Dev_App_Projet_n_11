import { FlatProps } from '../utils/interface'

export type FlatsJsonService = {
  FetchAllFlats(): Promise<FlatProps[] | undefined>
  FetchOneFlat(flatId: string): Promise<FlatProps | undefined>
}

export type FlatsApiService = {
  FetchAllFlats(): Promise<void | FlatProps[]>
  FetchOneFlat(flatId: string): Promise<void | FlatProps>
}
