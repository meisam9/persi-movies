import { Link } from "react-router-dom";
import Style from "./style"
const Footer = () => {

    return (
        <Style>
            <div className="footer">
            <div className = 'footer__logo'>
                <h3>persimovies</h3>
                <div className = 'footer__logo-socials'>
                    <a href="https://github.com/meisam9" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/meisam9" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://github.com/meisam9" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://github.com/meisam9" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <nav>
                <h4>Support</h4>
                <ul>
                    <li><a href="https://github.com/meisam9" target="_blank" rel="noreferrer"> contact us</a></li>
                    <li><a href="https://github.com/meisam9" target="_blank" rel="noreferrer">FAQ</a></li>
                    <li><a href="https://github.com/meisam9" target="_blank" rel="noreferrer">downloads</a></li>
                    <li><a href="https://github.com/meisam9" target="_blank" rel="noreferrer">spare part</a></li>
                </ul>
            </nav>
            <nav>
                <h4>pages</h4>
                <ul>
                    <li><Link to="/"> home </Link></li>
                    <li><Link to="/browse-movies">discover movies</Link></li>
                    <li><Link to="trends">trends</Link></li>
                    <li><Link to="about">about</Link></li>
                </ul>
            </nav>
            <div className="footer__form">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                }}>
                    <i className="far fa-envelope"></i>
                    <span>stay up to date on the latest from persimovies</span>
                    <br/>
                    <input type="text" placeholder="Enter your email address"/>
                    <div >sign up</div>
                </form>
            </div>
            </div>
            <hr/>
            <p className="copy"> © Persimovies  {new Date().getFullYear()}. All rights reserved.</p>
        </Style>
    )
}

export default Footer