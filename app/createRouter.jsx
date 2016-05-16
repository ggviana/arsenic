import { Router, Route, IndexRoute, Redirect } from 'react-router'

import Home   from 'home/Home'
import Lobby  from 'lobby/container'
import Room   from 'room/container'

export default (history) => () => (
  <Router history={history}>
    <Route path="/" component={Home} />
    <Route path="/lobby" component={Lobby} />
    <Route path="/room/:roomId" component={Room} />
    <Redirect from="*" to="/lobby" />
  </Router>
)