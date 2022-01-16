import httpService from "../../../utils/httpService"

export const getProjectById = (id, setProject, setApiError) => {
  httpService('GET', '/projects/' + id)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(constants.DEFAULT_ERROR_MESSAGE)
    })
    .then(setProject)
    .catch((error) => {
      const message = String(error)
      setApiError(message);
    })
}

export const getColumnsByProjectId = (id, setColumns, setApiError) => {
  httpService('GET', '/columns?project_id=' + id)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(constants.DEFAULT_ERROR_MESSAGE)
    })
    .then(setColumns)
    .catch((error) => {
      const message = String(error)
      setApiError(message);
    })
}

export const getCardsByProjectId = (id, setCards, setApiError) => {
  httpService('GET', '/cards?project_id=' + id)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(constants.DEFAULT_ERROR_MESSAGE)
    })
    .then(setCards)
    .catch((error) => {
      const message = String(error)
      setApiError(message);
    })
}