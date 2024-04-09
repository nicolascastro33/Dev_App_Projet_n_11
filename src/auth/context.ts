import { createContext, useContext } from 'react'
import { Dependencies } from './dependencies'

const DependenciesContext = createContext<Dependencies | null>(null)

export const useDependencies = () => {
  const context = useContext(DependenciesContext)
  if (!context)
    throw new Error(
      'useDependencies must be used within the DependenciesProvider'
    )
  return context
}

export default DependenciesContext
