import { Provider }   from 'react-redux'
import 'normalize.css/normalize.css'

import createApplication   from 'createApplication'
import createStore         from 'createStore'
import createHistory       from 'createHistory'
import createRouter        from 'createRouter'

const store       = createStore()
const history     = createHistory(store)
const Router      = createRouter(history)
const application = createApplication(document)

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    application
)