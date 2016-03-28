import { connect } from 'react-redux'

export function Room ({ params: { roomId } }) {
  return (
    <div>You are inside a room {roomId}</div>
  )
}

function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps)(Room)