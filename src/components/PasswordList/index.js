import './index.css'

const PasswordList = props => {
  const {eachPasswordList, lenofList, deletePassword, ischecked} = props

  const {id, userName, password, websiteName} = eachPasswordList

  const userProfilelogo = websiteName.slice(0, 1).toUpperCase()

  const deletebuttonIcon = () => {
    deletePassword(id)
  }

  const backgroundcolorprofile = [
    'blue',
    'purple',
    'darkblue',
    'barblue',
    'orange',
    'green',
    'darorange',
    'lightgreen',
    'red',
    'skyblue',
    'pup',
  ]
  const randomColor = backgroundcolorprofile.sort(() => Math.random() - 0.5)[
    lenofList
  ]

  return (
    <li className="listContainer">
      <div className={`profilePic ${randomColor}`}>{userProfilelogo}</div>
      <div className="passcodeanddeleteContainer">
        <div className="passwordContainer">
          <p className="webName">{websiteName}</p>
          <p className="userName">{userName}</p>
          {ischecked && <p className="password">{password}</p>}
          {!ischecked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="passwordStart"
            />
          )}
        </div>

        <button
          type="button"
          className="deletebutton"
          onClick={deletebuttonIcon}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordList
