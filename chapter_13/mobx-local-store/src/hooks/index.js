import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

export const useStore = () => {
  return useContext(MobXProviderContext)
}

export const useTodoStore = () => {
  const { todoStore } = useStore()
  return todoStore
}
