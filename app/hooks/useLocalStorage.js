'use client'
import { useEffect, useState } from "react"

export function useLocalStorage(key, initialState) {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const item = window.localStorage.getItem(key, state)
        const values = JSON.parse(item)
        if (values?.length > 0) {
            setState(values)
        }
    } ,[])

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    } ,[state])

    return [state, setState]
}