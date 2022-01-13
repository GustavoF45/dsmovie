import {ReactComponent as  GithubIcon} from '../../assets/img/github.svg';
import './style.css';

function Navbar() {
    return(
    <h1>
      <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/GustavoF45" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/GustavoF45</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    </h1>
    );
}

export default Navbar;