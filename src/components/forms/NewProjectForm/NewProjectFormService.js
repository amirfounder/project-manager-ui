import constants from "../../../utils/constants"
import httpService from "../../../utils/httpService"
import { validateRequired } from "../../../utils/validation"

export const validateForm = (values) => minimizeFormErrorObject({
  name: validateRequired(values?.name),
  tag: validateRequired(values?.tag),
  description: validateRequired(values?.description)
})

export const minimizeFormErrorObject = (errors) => {
  return Object.fromEntries(
    Object.entries(errors).filter(([, value]) => !!value)
  )
}

export const postProject = (project, setApiError, navigate) => {
  httpService('POST', '/projects', project)
    .then((response) => {
      if (response.ok) {
        navigate('/projects')
      } else {
        throw new Error(constants.DEFAULT_ERROR_MESSAGE)
      }
    })
    .catch((error) => {
      const message = String(error);
      setApiError(message)
    });
}