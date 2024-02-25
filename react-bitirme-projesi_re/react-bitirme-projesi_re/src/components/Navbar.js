import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from '../assets/Meram Belediyesi Logo.svg'; // Logo dosyasını içe aktar

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.state.clicked);
  }
  handleLink = () => {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Meram Belediyesi" className="navbar-logo-image" />
        </Link>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cname} to={item.url} onClick={this.handleLink}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
