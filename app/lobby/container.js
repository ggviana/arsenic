import { connect }  from 'react-redux'
import Lobby        from 'lobby/Lobby'

const mapStateToProps = ({ lobby: { rooms } }) => ({
  rooms
})

export default connect(mapStateToProps)(Lobby)