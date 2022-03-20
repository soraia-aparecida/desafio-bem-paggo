import React from 'react';
import { Container } from './styled';
import caixa from '../../assets/caixa.png'

export function Header() {
    return (
        <Container>
            <header>
                <div>
                    <p>Formulário</p>
                    <p>para compras de</p>
                    <h2>Pacote de adesivos</h2>
                </div>
                <img src={caixa} alt="Caixa para entrega" />
            </header>
        </Container>
    )
}
