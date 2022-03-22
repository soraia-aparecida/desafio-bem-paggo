import React, { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { GlobalStateContext } from '../../contexts/GlobalStateContext'
import { Container, Form, CardProdct, ButtonToGoBack, FinishButton } from './styled'
import { useNavigate } from "react-router-dom"
import { goToForm } from '../../router/coodinator'

const CartPage = () => {

    const { states, setters } = useContext(GlobalStateContext)
    const navigate = useNavigate()

    const getStateCart = () => {
        setters.setCart([...states.cart])
    }

    useEffect(() => {
        getStateCart()
    }, [])

    const remove = (item) => {
        let indice = states.cart.indexOf(item)

        while (indice >= 0) {
            states.cart.splice(indice, 1)
            indice = states.cart.indexOf(item)
            getStateCart()
        }
    }

    const mapProduct = states.cart.map((item, indice) => {
        return (
            <CardProdct key={indice}>
                1x <img src={item.photo} alt="Adesivo" />
                <button onClick={() => remove(item)}> 🗑️ </button>
            </CardProdct>
        )
    })

    let totalPrice = 0
    if (states.cart) {
        for (let i = 0; i < states.cart.length; i++) {
            totalPrice += Number(states.cart[i].price)
        }
    }

    const finalizePurchase = () => {
        setters.setCart([])
        setters.setNote("")
        alert("Compra finalizada com sucesso! Volte sempre 😁")
    }

    return (
        <Container>
            <Form>
                <header>
                    <Header />
                </header>
                <section>

                    {mapProduct.length > 0 ?
                        <div> <h2>Adesivos selecionados: </h2>
                            {mapProduct} <p>Valor Total: R$ {totalPrice},00</p></div>
                        : <h3>Nenhum produto adicionado ao carrinho 😕 </h3>}

                </section>
                <span>
                    {mapProduct.length > 0 ? <FinishButton onClick={finalizePurchase}> Finalizar compra</FinishButton> : <></>}
                    <ButtonToGoBack onClick={() => goToForm(navigate)}> Voltar</ButtonToGoBack>
                </span>
            </Form>
        </Container>
    )
}

export default CartPage