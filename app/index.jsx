import { Provider }   from 'react-redux'

import createStore    from 'createStore'
import createHistory  from 'createHistory'
import createRouter   from 'createRouter'

const store   = createStore()
const history = createHistory(store)
const Router  = createRouter(history)

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('application')
)