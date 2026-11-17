const footerStyle = {
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #eee",
    height: "10vh",
    letterSpacing: "5px"
}
function Footer() {
    return (
        <footer style={footerStyle}>
            All rights reserved by Boulder &copy;
        </footer>
    );
}
export default Footer