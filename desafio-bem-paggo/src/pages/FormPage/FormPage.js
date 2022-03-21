import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Container, Form, CardInfo } from './styled';
import react from '../../assets/react-adesivo-sticker.png'
import angular from '../../assets/adesivo-angular.jpg'
import vue from '../../assets/vuejs-adesivo-sticker.png'
//import GlobalStateContext from '../../contexts/GlobalStateContext'

const FormPage = () => {

    const [carrinho, setCarrinho] = useState([])


    const products = [
        {
            id: 1,
            name: 'Adesivo React',
            price: 10,
            photo: react

        },
        {
            id: 2,
            name: 'Adesivo Angular',
            price: 10,
            photo: angular

        },
        {
            id: 3,
            name: 'Adesivo Vue',
            price: 10,
            photo: vue

        },
    ]



    const addProduto = (produto) => {

        let produtoSelecionado = products.filter((products) => {
            products.quantidade = 0
            return products.id === produto.id
        })

        if (produtoSelecionado[0].quantidade !== 1) {

            produtoSelecionado[0].quantidade += 1
            const novoCarrinho = [produtoSelecionado[0], ...carrinho]
            setCarrinho(novoCarrinho)

        } else {
            const novoCarrinho = carrinho.map((item) => {

                if (produtoSelecionado[0].id === item.id) {

                    return { ...item, quantidade: item.quantidade + 1 }
                }

            })
            setCarrinho(novoCarrinho)
        }

    }




    const mapProduct = products.map((item) => {

        return (
            <CardInfo>
                <div>
                    <img src={item.photo} alt="Adesivo" />
                    <h4>{`R${item.price},00`}</h4>
                    <section>
                        <button> - </button>
                        <p>{item.quantidade}</p>
                        <button onClick={() => addProduto(item)}> + </button>
                    </section>
                </div>
            </CardInfo>
        )
    })

    console.log("carro", carrinho)
    return (

        <Container>
            <Form>
                <header>
                    <Header />

                </header>
                <div>
                    <section>
                        <h2>Adesivos diponíveis: </h2>
                        <CardInfo>
                            {mapProduct}
                        </CardInfo>
                    </section>


                    <section>
                        <h3>Observações</h3>
                    </section>
                </div>
            </Form>
        </Container>
    )
}

export default FormPage