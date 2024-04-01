import { FlatsProps } from '../interface'

export type FlatsService = {
  data(): Promise<FlatsProps[] | undefined>
}
