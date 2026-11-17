import headStyle from './header.css'
const headerStyle = {
    color: "white"
}

function Header() {
    return (
        <header style={headStyle}>
            <div className="logo">Boulder</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
        </header>
    );
}
export default Header