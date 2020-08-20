import { decode } from 'jsonwebtoken'

export const validarToken = token => {

  const miToken = 'invalido'
  const tokenLS = token ? token : localStorage.getItem('token')

  if(!tokenLS) return miToken
  if(decode(tokenLS).exp > new Date() / 1000) return miToken

  return 'valido'
}
