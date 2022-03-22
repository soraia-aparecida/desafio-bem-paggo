import React from 'react'
import { Container } from './styled'
import caixa from '../../assets/caixa.png'
import carrinho from '../../assets/carrinho.png'
import { useLocation } from 'react-router-dom'

export function Header() {
    const location = useLocation()

    const homeHeader = () => {
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

    const cartHeader = () => {
        return (
            <Container>
                <header>
                    <div>
                        <h1>Carrinho</h1>
                    </div>
                    <img src={carrinho} alt="Caixa para entrega" />
                </header>
            </Container>
        )
    }

    const notPage = () => {
        return <></>
    }

    const changeHeader = () => {

        switch (location.pathname) {
            case '/':
                return homeHeader();
            case '/carrinho':
                return cartHeader()
            default:
                return notPage()
        }
    }

    return (
        <>{changeHeader()}</>
    )
}
