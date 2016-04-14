const ROOM_NAME_LENGTH = 32

export default function () {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" maxLength={ROOM_NAME_LENGTH} />
      <input type="submit" value="Create room" />
    </form>
  )
}