import { Router, Route, IndexRoute } from 'react-router'

import Home   from 'home/Home'
import Lobby  from 'lobby/Lobby'
import Room   from 'room/Room'

export default function (history) {
  return () => (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/room/:roomId" component={Room} />
    </Router>
  )
}