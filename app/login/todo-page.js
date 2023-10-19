'use client'

import { useContext, useState } from "react"
import TokenContext from "../context/TokenContext"
const endpoint = 'http://localhost:8000/api/v1/account/login'


function LoginPage() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const {setToken} = useContext(TokenContext)
function handleLogin(e) {
    e.preventDefault()
    
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            username: username,
            password: password,
        })
    })
    .then(response => response.json())
    .then(data => {
        setToken(data.token)
        console.log('seted', data.token)
    })
}

    
    return (
        <main className="text-center">
            <form onSubmit={handleLogin}
                action={endpoint}
                className="max-w-600px p-3 mx-auto mt-3">
                <label className="fs-4 mb-2" 
                htmlFor="username">Nombre:</label>
                <input onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    autoComplete="off"  
                    type="text" 
                    name="usernmae"
                    className="form-control mb-4" 
                    />

                <label className="fs-4 mb-2" 
                htmlFor="password">Contrasena:</label>
                <input onChange={(e) => setPassword(e.target.value)}
                    value={password}  
                    type="password" 
                    name="password"
                    className="form-control mb-4" 

                    />

                <button className="btn btn-primary">Iniciar Sesion</button>
            </form>
        </main>
    )
}