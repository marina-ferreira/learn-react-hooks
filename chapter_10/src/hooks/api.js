import { useResource } from 'react-request-hook'

export const useApiLogin = () => {
  return useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
  }))
}

export const useApiRegister = () => {
  return useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password }
  }))
}

export const useApiCreatePost = () => {
  return useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))
}

export const useApiThemes = () => {
  return useResource(() => ({
    url: '/themes',
    mothod: 'get'
  }))
}
