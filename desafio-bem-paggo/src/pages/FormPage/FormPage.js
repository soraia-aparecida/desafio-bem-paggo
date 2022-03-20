import React from 'react';
import { Header } from '../../components/Header/Header';
import { Container, Form, CardInfo } from './styled';
import react from '../../assets/react-adesivo-sticker.png'
import angular from '../../assets/adesivo-angular.jpg'
import vue from '../../assets/vuejs-adesivo-sticker.png'


export function FormPage() {
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
                            <div>
                                <img src={react} alt="Adesivo React" />
                                <h4>R$ 20,00</h4>
                                <div>
                                    <button>- </button>
                                    <p> 0 </p>
                                    <button> + </button>
                                </div>
                            </div>

                            <div>
                                <img src={angular} alt="Adesivo Angular" />
                                <h4>R$ 20,00</h4>
                                <div>
                                    <button> - </button>
                                    <p>0</p>
                                    <button> + </button>
                                </div>
                            </div>

                            <div>
                                <img src={vue} alt="Adesivo Vue" />
                                <h4>R$ 20,00</h4>
                                <div>
                                    <button> - </button>
                                    <p> 0 </p>
                                    <button> + </button>
                                </div>
                            </div>
                        </CardInfo>
                    </section>

                    <section>
                        <p>Campo de observação</p>
                    </section>
                </div>
            </Form>
        </Container>
    )
}