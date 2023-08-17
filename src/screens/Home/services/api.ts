import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '815a52afafeb46145edff08ea7b3360f',
    language: 'pt-BR',
    include_adult: false,
  }
})

