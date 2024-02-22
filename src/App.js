import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListItems from './ListItems'
import './App.css'

class PasswordManager extends Component {
  state = {
    List: [],
    count: 0,
    email: '',
    name: '',
    password: '',
    ischeckbox: false,
    searched: '',
    isempty: true,
  }

  onwebsitechanging = event => {
    this.setState({email: event.target.value})
  }

  onusernamechanging = event => {
    this.setState({name: event.target.value})
  }

  onpasswordchanging = event => {
    this.setState({password: event.target.value})
  }

  submiting = event => {
    event.preventDefault()
    const {email, name, password} = this.state
    const newListItem = {
      id: uuidv4(),
      name,
      email,
      password,
    }
    this.setState(prevState => ({
      List: [...prevState.List, newListItem],
      count: prevState.count + 1,
      isempty: false,
      name: '',
      email: '',
      password: '',
    }))
  }

  checkbox = () => {
    this.setState(prevState => ({
      ischeckbox: !prevState.ischeckbox,
    }))
  }

  deleteItem = id => {
    this.setState(prevState => ({
      List: prevState.List.filter(eachList => {
        if (eachList.id !== id) {
          return eachList
        }
        return null
      }),
    }))
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  search = event => {
    this.setState({searched: event.target.value})
  }

  render() {
    const {List, ischeckbox, count, searched, isempty} = this.state
    const searchResult = List.filter(eachList =>
      eachList.email.toLowerCase().includes(searched.toLowerCase()),
    )
    const lengthresult = searchResult.length
    return (
      <div className="bg">
        <div className="img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logoimg"
          />
        </div>
        <div className="card">
          <form className="form" onSubmit={this.submiting}>
            <h1 className="heading">Add New Password</h1>
            <div className="inputdiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="imgg"
              />
              <input
                type="input"
                placeholder="Enter Website"
                className="input"
                onChange={this.onwebsitechanging}
              />
            </div>
            <div className="inputdiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="imgg"
              />
              <input
                type="input"
                placeholder="Enter Username"
                className="input"
                onChange={this.onusernamechanging}
              />
            </div>
            <div className="inputdiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="imgg"
              />
              <input
                type="Password"
                placeholder="Enter Password"
                className="input"
                onChange={this.onpasswordchanging}
              />
            </div>
            <div className="divbutton">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="lgimg"
            />
          </div>
        </div>

        <div className="card2">
          <div className="upper">
            <div className="fdkf">
              <h1 className="passwordpara">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="iconsearch">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="searchicon"
              />
              <input
                type="search"
                className="input2"
                placeholder="Search"
                onChange={this.search}
              />
            </div>
          </div>
          <hr />
          <div className="checkdiv">
            <input
              type="checkbox"
              className="checkbox"
              onChange={this.checkbox}
              id="myInput"
            />
            <label htmlFor="myInput" className="showpassword">
              Show passwords
            </label>
          </div>

          {lengthresult === 0 ? (
            <div className="divvv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="imgno"
              />
              <p className="no">No Passwords</p>
            </div>
          ) : (
            <ul className="ul">
              {searchResult.map(eachItem => {
                return (
                  <ListItems
                    details={eachItem}
                    key={eachItem.id}
                    ischeckbox={ischeckbox}
                    deleteItem={this.deleteItem}
                  />
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
