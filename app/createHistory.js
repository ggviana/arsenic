import { browserHistory }       from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

export default (store) => 
  syncHistoryWithStore(browserHistory, store)