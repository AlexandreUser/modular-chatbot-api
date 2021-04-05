import "../App.css";
import Listbot from "../component/listBots";
function App() {
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    const name = getParameterByName("name")
    return (
        <div className="App">
            <div className="content-bar">
                <div className="text-bar">
                    <h1 style={{ textAlign: "center", fontSize: "34px" }}>{name}</h1>
                    <p style={{ textAlign: "center", fontSize: "14px" }}>This is a bot example</p>
                </div>

            </div>
            <div className="robot-bar">
                <Listbot />

            </div>
        </div>
    );
}

export default App;
