import './ListItems.css'

const ListItems = props => {
  const {details, ischeckbox, deleteItem, key} = props
  const {name, email, password, id} = details
  const firstWord = name[0]
  const oncliking = () => {
    deleteItem(id)
  }
  return (
    <li className="li">
      <div className="details">
        <p className="website">{email}</p>
        <p className="username">{name}</p>
        {!ischeckbox && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="img"
          />
        )}
        {ischeckbox && <p>{password}</p>}
      </div>
      <div>
        <button className="buttonn" onClick={oncliking} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="buttonimg"
          />
        </button>
      </div>
    </li>
  )
}
export default ListItems
