import logo from "../../assets/images/logo.svg"

const Header = () => (
    <header className = "backg-color">
        <a href="/" className="content-logo">
            <img src={logo} alt="Larry's Pokemon"/>
        </a>
    </header>
)

export default Header
