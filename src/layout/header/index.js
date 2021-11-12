import { NavLink, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useAuthState,logout,useAuthDispatch } from "../../context"
import { MD5 } from "../../helpers/md5"
import GlobalStyle from "../../theme"
import Style from "./style"

const Header = () => {
    const user = useAuthState()
    const dispatch = useAuthDispatch() 
    const history = useHistory()
    

    const clickHanler=()=> {
        const userProfile=document.querySelector('.user__logged-details')
        userProfile.classList.toggle('show')
    }

    const handleLogout = () => {
        const userProfile=document.querySelector('.user__logged-details')
        logout(dispatch)
        userProfile.classList.remove('show')
        history.push('/login')
    }

    const handleClick = () => { // for toggling menu
        const background = document.querySelector('.mobile__header__background');
        const btn = document.querySelector('.mobile__header__button');
        const navbar = document.querySelector('.mobile__navbar');
        btn.classList.toggle('cross');
        background.classList.toggle('full');
        navbar.classList.toggle('show-nav');
    }

    return (
        <Style>
            <GlobalStyle/>
            <div className="left__header">
                <div className="logo">
                    <Link to="/">
                        <h1 >persi movies</h1>
                    </Link>
                </div>
                <div className="user">
                    <div className="user__login" style={{display: user.firstName ? 'none' : 'block'}}>
                        <Link to="/login" >
                            log in
                        </Link>
                    </div>
                    <div className="user__logged" style={{display: user.firstName ? 'block' : 'none'}} onClick={clickHanler}>
                            <div className="user__logged-img">
                                <img src={`https://www.gravatar.com/avatar/${MD5(user.email)}?d=identicon&f=y`} alt="user profile"/>
                                <p>{user.firstName ? `Welcome:  ${user.firstName}` : ''}</p>
                            </div>
                    </div>
                            <div className="user__logged-details">
                                <Link to="/user-profile" onClick={clickHanler}>User Profile</Link>
                                <div onClick={handleLogout}>Log Out</div>
                            </div>
                </div>
            </div>
            <nav className="navbar">
                <ul>
                    <li> <NavLink exact to="/" activeClassName='active'>Home</NavLink ></li>
                    <li> <NavLink exact to="/browse-movies" activeClassName='active'>Browse Movies</NavLink></li>
                    <li> <NavLink exact to="/trends" activeClassName='active'>Trends</NavLink></li>
                    <li> <NavLink exact to="/about" activeClassName='active'>About Us</NavLink></li>
                </ul>
            </nav>
                <div className="mobile__header">
                <label htmlFor="navi-toggle" className="mobile__header__button" onClick={handleClick}>
                    <span className="mobile__header__icon">&nbsp;</span>
                </label>

                <div className="mobile__header__background">&nbsp;</div>
                <nav className="mobile__navbar">

                    <ul>
                        <li onClick={handleClick}> <Link to="/">Home</Link></li>
                        <li onClick={handleClick}> <Link to="/browse-movies">Browse Movies</Link></li>
                        <li onClick={handleClick}> <Link to="/trends">Trends</Link></li>
                        <li onClick={handleClick}> <Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
                <div className="logo">
                    <h1><span>P</span>Movies</h1>
                </div>
            </div>
        </Style>
    )
}

export default Header