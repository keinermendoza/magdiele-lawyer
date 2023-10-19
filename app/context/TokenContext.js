'use client'
import { createContext, useState } from "react";
const TokenContext = createContext({})

export const TokenProvider = ({children}) => {
    const [token, setToken] = useState('bdc3f59e0064e4743ed243b2bf25e140e7930eac')

    return (
        <TokenContext.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContext