import React from 'react';
import erro from "../../assets/error.jpg"
import { ErrorImg } from './styled';

export function ErrorPage() {
    return (
        <div>
            <ErrorImg src={erro} alt='imagem de erro'/>
        </div>
    )
}