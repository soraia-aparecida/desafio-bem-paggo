import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { GlobalStateContext } from '../../contexts/GlobalStateContext'
import { Container, Form } from './styled'

const CartPage = () =>{

    const { states, setters } = useContext(GlobalStateContext)

    console.log(states.note, "anotacoes")
    console.log(states.cart)

    const mapProduct = states.cart.map((item) => {
        return (
            <div>
                <img src={item.photo} alt="Adesivo" />
                {/* <h4>{`R$${item.price},00`}</h4> */}
                <section>
                    <button> Remover  </button>
                </section>
            </div>
        )
    })


    return (
        <Container>
            <Form>
                <header>
                    <Header />
                </header>
                {mapProduct}
            </Form>
        </Container>
    )
}

export default CartPage