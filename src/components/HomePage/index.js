import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordList from '../PasswordList'

import './index.css'

const initalPaswordList = []

class HomePage extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    passwordList: initalPaswordList,
    inputSearch: '',
    ischecked: false,
  }

  onSubmitPassword = event => {
    const {websiteName, userName, password} = this.state
    event.preventDefault()
    const newPassword = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangewebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  deletePassword = id => {
    const {passwordList} = this.state

    const fliteredList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordList: fliteredList})
  }

  oncheckingBox = event => {
    this.setState({ischecked: event.target.checked})
  }

  render() {
    const {
      userName,
      password,
      websiteName,
      passwordList,
      inputSearch,
      ischecked,
    } = this.state

    const results = passwordList.filter(eachPasswordList =>
      eachPasswordList.websiteName
        .toLowerCase()
        .includes(inputSearch.toLowerCase()),
    )

    const lenofList = results.length

    const nopasswordcont = lenofList === 0 ? true : false

    return (
      <div className="bgContainer">
        <div className="bgCont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="passwordManagerLogo"
          />
          <div className="managepassword">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="ManagePasswordImg"
            />

            <form className="formEl" onSubmit={this.onSubmitPassword}>
              <h1 className="head">Add New Password</h1>
              <div className="websiteContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="websiteLogo"
                />
                <input
                  type="text"
                  className="inputwebsiteEl"
                  placeholder="Enter Website"
                  onChange={this.onChangewebsite}
                  value={websiteName}
                />
              </div>
              <div className="websiteContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="websiteLogo"
                />
                <input
                  type="text"
                  className="inputwebsiteEl"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={userName}
                />
              </div>
              <div className="websiteContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="websiteLogo"
                />
                <input
                  type="password"
                  className="inputwebsiteEl"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <button type="submit" className="btnEl">
                Add
              </button>
            </form>
          </div>

          <div className="showpasswordsection">
            <div className="passheader">
              <div className="passwordheader">
                <div className="noofpaassCont">
                  <h1 className="passwordhead">Your Passwords</h1>
                  <p className="noofPass">{lenofList}</p>
                </div>

                <div className="serchContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="searchImg"
                  />
                  <input
                    type="search"
                    placeholder="Search"
                    className="searchEl"
                    onChange={this.onChangeSearch}
                    value={inputSearch}
                  />
                </div>
              </div>

              <div className="checkboxContainer">
                <input
                  type="checkbox"
                  className="checkbox1"
                  onChange={this.oncheckingBox}
                  id="checkbox1"
                />
                <label className="checkboxpara" htmlFor="checkbox1">
                  Show passwords
                </label>
              </div>
            </div>
            {!nopasswordcont && (
              <ul className="unorderedList">
                {results.map(eachPasswordList => (
                  <PasswordList
                    key={eachPasswordList.id}
                    eachPasswordList={eachPasswordList}
                    lenofList={lenofList}
                    deletePassword={this.deletePassword}
                    ischecked={ischecked}
                  />
                ))}
              </ul>
            )}
            {nopasswordcont && (
              <div className="whennopasswords">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="noPasswordImg"
                />
                <p className="passwordpara">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
