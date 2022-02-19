import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.scss'

import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } from '../../Constants/Constants';

const LoginPage = () => {
    const history = useHistory();

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        if(token){
            history.push("/dashboard");
        }


    }, [])

    return <a className="loginlink" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
    to Spotify</a>

}
export default LoginPage;