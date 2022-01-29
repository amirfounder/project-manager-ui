import constants from "../../../utils/constants"
import httpService from "../../../utils/httpService"

export const createCard = (cardDTO, setCards, setApiError) => {
  httpService('POST', '/cards', cardDTO)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(constants.DEFAULT_ERROR_MESSAGE)
    })
    .then((body) => {
      setCards((prevCards) => ([...prevCards, body]))
    })
    .catch((error) => {
      setApiError(error);
    })
}