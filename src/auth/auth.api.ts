import { FlatsService } from './auth.service'
import flats from '../data/flat.json'

export const AuthAPI: FlatsService = {
  data: async () => {
    try {
      const response = flats
      return await response
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
