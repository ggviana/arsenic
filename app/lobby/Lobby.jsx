import { connect }    from 'react-redux'
import LobbyRoomList  from 'lobby/LobbyRoomList'
import LobbyRoomForm  from 'lobby/LobbyRoomForm'

function Lobby ({ rooms }) {
  return (
    <section>
      <h2>Enter a room</h2>
      <LobbyRoomList rooms={rooms} />
      <h2>... or create one new</h2>
      <LobbyRoomForm />
    </section>
  )
}

function mapStateToProps (state) {
  return {
    rooms : state.rooms || []
  }
}

export default connect(mapStateToProps)(Lobby)