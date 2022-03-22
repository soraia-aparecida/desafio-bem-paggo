import React, { useContext} from 'react'
import { Header } from '../../components/Header/Header';
import { Container, Form, CardInfo, CardForm } from './styled'
import react from '../../assets/react-adesivo-sticker.png'
import angular from '../../assets/adesivo-angular.jpg'
import vue from '../../assets/vuejs-adesivo-sticker.png'
import useForm from '../../hooks/userForm'
import { GlobalStateContext } from '../../contexts/GlobalStateContext'
import { useNavigate } from "react-router-dom"
import { goToCart } from '../../router/coodinator'

const FormPage = () => {

    const { states, setters } = useContext(GlobalStateContext)
    const navigate = useNavigate()

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
            price: 15,
            photo: angular

        },
        {
            id: 3,
            name: 'Adesivo Vue',
            price: 20,
            photo: vue

        },
    ]

    const { form, onChange, cleanFields } = useForm({
        observacao: ""
    })

    const salvar = (texto) => {
        setters.setNote([...states.note, texto])
    }

    const mudar = () => {
        return goToCart(navigate)
    }

    const onSubmintForm = (event) => {
        event.preventDefault()
        salvar(form, cleanFields)
        mudar()
    }

    const addCart = (item) => {
        alert('Produto adicionado ao carrinho, com sucesso!')
        setters.setCart([...states.cart, item])
    }

    const mapProduct = products.map((item) => {
        return (
            <CardInfo key={item.id}>
                <img src={item.photo} alt="Adesivo" />
                <h4>{`R$${item.price},00`}</h4>
                <section>
                    <button onClick={() => addCart(item)}> Adicionar  </button>
                </section>
            </CardInfo>
        )
    })
    
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
                    <CardForm>
                        <h3>Observações</h3>
                        <form onSubmit={onSubmintForm}>
                            <input
                                placeholder="Alguma duvida? Recado?"
                                value={form.observacao}
                                onChange={onChange}
                                name={"observacao"}
                            />
                            <div>
                                <button type={"submit"}>Ir para carrinho</button>
                            </div>
                        </form>
                    </CardForm>
                </div>
            </Form>
        </Container>
    )
}

export default FormPage