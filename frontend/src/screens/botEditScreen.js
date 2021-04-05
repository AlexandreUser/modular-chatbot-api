import React, { useState } from "react"
import coreApi from "../api/core.api"
import '../App.css'
export default function App(props) {
    const [name, setName] = useState("")
    const [descrition, setDescription] = useState("")
    return <div className="App" style={{ display: "block", marginTop: "-25px", minHeight: "110vh" }}>
        <h1 style={{ color: "white", textAlign: "center", width: "100%", paddingTop: "25px" }}>Create your own chatbot</h1>
        <p style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}>Start developing your own chatbot right now!</p>
        <div >
            <div style={{ display: "block" }}>

                <input value={name} onChange={(e) => { setName(e.target.value) }} className="inputField" placeholder="Name of your chatbot"></input>
                <br />
                <input value={descrition} onChange={(e) => { setDescription(e.target.value) }} className="inputField" placeholder="Description of your chatbot"></input>
                <br />
                <button onClick={() => {
                    coreApi.get(`/api/v1/create?name=${name}`).then(res => {
                        if (res.data) {
                            window.location.href = `/edit/create?name=${name}&description=${descrition}`

                        }
                    })
                }} className="buttonField">Create</button>
            </div>


        </div>
    </div>
}