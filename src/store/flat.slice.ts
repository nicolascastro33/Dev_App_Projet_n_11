import { StateCreator } from 'zustand'
import { FlatProps } from '../interface'
import { FlatJsonFile } from '../fetch/fetch.json'

export type FlatState = {
  flats: FlatProps[] | undefined
  flat: FlatProps | undefined
}
export type FlatActions = {
  getAllFlats: () => void
  getOneFlat: (flatId: string) => void
}

export type FlatStore = FlatState & FlatActions

export const createFlatSlice: StateCreator<FlatStore, [], [], FlatStore> = (
  set,
  get
) => ({
  flats: undefined,
  flat: undefined,
  getAllFlats: async () => {
    if (!get().flats) {
      await set(() => ({ flats: FlatJsonFile.fetchAllFlats() }))
    }
  },
  getOneFlat: async (flatId: string) => {
    // On vérifie si des données sont présentes dans le store avant de les récupérer
    // Ou  sinon on récupère directement le flat désiré depuis la base de donnée JSON
    if (get().flats) {
      await set(() => ({
        flat: get().flats?.find((flat) => flat.id === flatId),
      }))
    } else if (get().flat?.id !== flatId || !get().flat) {
      await set(() => ({ flat: FlatJsonFile.fetchOneFlat(flatId) }))
    }
    // Si aucune donnée n'est présente, on envoie une erreur
    if (!get().flat) {
      throw new Error('Impossible de récupérer le logement')
    }
  },
})

