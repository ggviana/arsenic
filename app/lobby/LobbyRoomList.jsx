import LobbyRoomItem from 'lobby/LobbyRoomItem'

export default function ({ rooms }) {
  return (
    <ul>
      {rooms.map(room => <LobbyRoomItem key={room.id} name={room.name} />)}
    </ul>
  )
}