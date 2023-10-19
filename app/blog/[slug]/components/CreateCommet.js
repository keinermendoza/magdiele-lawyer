'use client'

import { useState, useContext } from "react"
import TokenContext from "@/app/context/TokenContext"

export default function CreateComment ({id}) {
    const endpoint = `http://localhost:8000/api/v1/blog/${id}/comments/create/`
    const {token} = useContext(TokenContext)
    
    const [comment, setComment] = useState('')
    
    function handleCommentCreate (e) {
        console.log(comment)
        e.preventDefault()
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
              },
            
            body: JSON.stringify({
                body: comment,
                user: 1
            }),
            
        })
    }
    return (
        <form onSubmit={handleCommentCreate}>
            <textarea
                onChange={(e) => setComment(e.target.value)} 
                className="form-control"
                name="body"
                id="" 
                cols="30"
                rows="10"
                value={comment}
                ></textarea>
            <button>Comentar</button>
        </form>
    )
}