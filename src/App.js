import { Header , Footer , Content } from "./components"
const appStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#000000",
    margin: "0",
}
const containerStyle = {
    width: "90%",
    height: "100vh",
    overflow: "hidden"
}
function App() {
    return (
        <div className="parent" style={appStyle}>
            <div className="container" style={containerStyle}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </div>
    )
}
export default App 