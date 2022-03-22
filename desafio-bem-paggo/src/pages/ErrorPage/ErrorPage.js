import React from 'react'
import erro from "../../assets/error.jpg"
import { ErrorImg } from './styled'

const ErrorPage = () => {
    return (
        <div>
            <ErrorImg src={erro} alt='imagem de erro' />
        </div>
    )
}

export default ErrorPage