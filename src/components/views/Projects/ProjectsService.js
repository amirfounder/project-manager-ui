import httpService from "../../../utils/httpService"

export const getAllProjects = async (setProjects, setApiError) => {
  httpService('GET', '/projects')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response?.errorMessage || 'Oops! Something went wrong.')
    })
    .then((body) => {
      setProjects(body);
    })
    .catch((error) => {
      setApiError(error);
    })
}