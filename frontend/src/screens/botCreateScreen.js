import React, { useEffect, useState } from "react"
import coreApi from "../api/core.api";
import Listbot from "../component/listBots";
import Terminal from "terminal-in-react"
import '../App.css'
export default function App(props) {
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    const [name, setName] = useState(getParameterByName("name"))
    const [descrition, setDescription] = useState(getParameterByName("description"))
    const [knowlegde, setKnowlegde] = useState([])
    const [question, setQuestion] = useState("")
    const [response, setResponse] = useState("")
    function RenderQuestions() {
        return knowlegde.map(data => {
            return <div style={{ display: "flex", textAlign: "center", width: "500px", border: "1px solid white", borderRadius: "10px", marginTop: "10px" }}>
                <div style={{ width: "50%" }}>
                    <p style={{ textAlign: "center", color: "white" }}>Question</p>
                    <p style={{ textAlign: "center", color: "white" }}>{data.question}</p>
                </div >
                <div style={{ width: "50%" }}>
                    <p style={{ textAlign: "center", color: "white" }}>Response</p>
                    <p style={{ textAlign: "center", color: "white" }} >{data.response}</p>
                </div>
            </div >
        })
    }
    return <div className="App" style={{ display: "block" }}>
        <div style={{ display: "flex", marginTop: "-25px" }}>
            <div className="content-bar" style={{ marginTop: "10%" }}>

                <h1 style={{ color: "white", textAlign: "center", width: "100%", paddingTop: "25px" }}>Let's get a little deep in your creation</h1>
                <p style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}>Let's add some conversation</p>
                <div >
                    <div style={{ display: "block" }}>

                        <input disabled value={name} onChange={(e) => { setName(e.target.value) }} className="inputField" placeholder="Name of your chatbot"></input>
                        <br />
                        <input disabled value={descrition} onChange={(e) => { setDescription(e.target.value) }} className="inputField" placeholder="Description of your chatbot"></input>
                        <br />
                        <input value={question} onChange={(e) => { setQuestion(e.target.value) }} className="inputFieldSM" placeholder="Question to your chatbot"></input>
                        <br />
                        <input value={response} onChange={(e) => { setResponse(e.target.value) }} className="inputFieldSM" placeholder="Response of your chatbot"></input>
                        <br />
                        <button onClick={() => {
                            coreApi.post("api/v1/edit", { name: name, question: question, response: response }).then(res => {
                                setKnowlegde(res.data.payload.knowlegde)
                                setQuestion("")
                                setResponse("")
                            })
                        }} className="buttonField">add</button>
                    </div>

                </div>

            </div>
            <div className="robot-bar">
                <Listbot />

            </div>
        </div>
        <div style={{ width: "50%" }}>
            <div style={{ marginBottom: "50px", marginLeft: "calc(50% - 250px)" }}>
                <RenderQuestions />

            </div>
        </div>
    </div>
}