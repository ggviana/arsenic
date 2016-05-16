import { Link } from 'react-router'

export default ({ id, name }) => (
  <li>
    <Link to={`/room/${id}`}>
      {name}
    </Link>
  </li>
)