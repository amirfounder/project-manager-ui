import constants from "./constants"

export default async (method, route, payload) => {
  return fetch(constants.API_URL + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  })
}