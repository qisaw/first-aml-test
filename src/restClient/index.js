import superagent from 'superagent'

const BASE_URL = 'http://localhost:3016'

export const get = url => superagent.get(`${BASE_URL}${url}`)
