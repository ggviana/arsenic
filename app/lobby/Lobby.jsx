import LobbyRoomList  from 'lobby/LobbyRoomList'
import LobbyRoomForm  from 'lobby/LobbyRoomForm'

export default ({ rooms }) => (
  <section>
    <h2>Enter a room</h2>
    <LobbyRoomList rooms={rooms} />
    <h2>... or create one new</h2>
    <LobbyRoomForm />
  </section>
)