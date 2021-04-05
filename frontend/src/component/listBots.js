import React, { useEffect, useState } from "react";
import ChatBot from 'react-simple-chatbot';
import api from "../api/core.api"
export default function App() {
    function ProcessorComponent(props) {
        function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
        const name = getParameterByName("name")
        const [message, setMessage] = useState("Hello, let's start a conversation :)")
        useEffect(() => {
            if (props.previousStep.message) {
                api.get("/api/v1/get/response?name=" + name + "&question=" + props.previousStep.message).then(res => {
                    console.log()
                    setMessage(res.data.payload.response.response.response)
                })

            }
        }, [])

        return <p>{message}</p>


    }
    const [previous, setPrevious] = useState("Hi")
    const [steps, setSteps] = useState([{
        id: '0',
        component: <ProcessorComponent />,
        asMessage: true,
        trigger: "1"
    }, {
        id: '1',
        user: true,
        trigger: (value) => {
            setPrevious("cool")
            return "0"
        }
    },])


    return <ChatBot speechSynthesis={{ enable: true, lang: 'en' }}
        steps={steps} />

}
