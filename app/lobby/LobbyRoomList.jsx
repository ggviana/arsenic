import LobbyRoomItem from 'lobby/LobbyRoomItem'

export default ({ rooms }) => (
  <ul>
    {rooms.map(room => 
      <LobbyRoomItem key={room.id} id={room.id} name={room.name} />
    )}
  </ul>
)