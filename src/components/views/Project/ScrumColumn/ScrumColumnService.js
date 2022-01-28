import { deepcopy } from "../../../../utils/utils"

export const createCard = (cardDTO, setColumns, setApiError) => {
  httpService('POST', '/columns', cardDTO)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(constants.DEFAULT_ERROR_MESSAGE)
    })
    .then((body) => {
      setColumns((prevState) => {
        const prevStateCopy = deepcopy(prevState);
        prevStateCopy.push(body);
        return prevStateCopy
      })
    })
    .catch((error) => {
      const message = String(error)
      setApiError(message);
    })
}