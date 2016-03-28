import { browserHistory }       from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

export default function (store) {
  return syncHistoryWithStore(browserHistory, store)
}