import constants from "../../../utils/constants"
import httpService from "../../../utils/httpService"

export const getAllProjects = async (setProjects, setApiError) => {
  await httpService('GET', '/projects')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(constants.DEFAULT_ERROR_MESSAGE)
    })
    .then((body) => {
      setProjects(body);
    })
    .catch((error) => {
      const message = String(error)
      setApiError(message);
    })
}