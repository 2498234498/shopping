import {getRequest} from './config'

function text () {
  return getRequest(
    '/text'
  )
}

export default {
  text
}
