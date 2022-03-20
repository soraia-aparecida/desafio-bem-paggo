import React from 'react'
import error from "../../assets/error.jpg"
import { ErrorImg } from './styled'

export function NotFound() {
    return (
        <div>
            <h1>404 Page not found</h1>
            <ErrorImg src={error} alt='imagem de erro' />
        </div>
    )
}