import styled from "styled-components"

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#8a2be2, #893dd0);
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Form = styled.div`
    width: 40vw;
    height: 95vh;
    background-color: white;
    border-radius: 5%; 
    header{
        width: 100%;
    }
    section{
        display: flex;
        flex-direction: column;
        justify-content: space-be;
        align-items: center;
        margin-top: 2vh;
        h2{
            margin-left: 2vw;
            margin-bottom: 1vh;
        }
        h3{
            margin-left: 2vw;
        }
    }
`

export const CardInfo = styled.div`
display: flex;
flex-direction: row;
width: 35vw;
height: 30vh;
align-items: center;
justify-content: center;
   div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%; 
        border: 1px solid #274360;   
        margin: 3px;
    img{
        width: 100%;
        height: 75%;
    }
    h4{
        margin-top: -2vh;
    }
    section{
        display: flex;
        flex-direction: row; 
        p{
            font-size: 18px;
        }
        button{
            width: 8vw;
            height: 3.5vh;
            margin-bottom: 0.7vh;;
            background-color: #274360;
            border: none;
            border-radius: 7px;
            font-size: 16px;
            color: white;
            :hover{
                background-color: white;
                border: 1px solid #274360;
                color: black;
            }
            :active{
                background-color: #274360;
            }
        }
    }
   }
`

export const CardForm = styled.section`
h3{
    margin-top: 3vh;
    margin-bottom: 1vh;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input{
        width: 35vw;;
        height: 11vh;
        margin-top: 1vh;
        border-radius: 1em;
        padding:0.5vw
    }
    button{
        width: 15vw;;
        height: 4vh;
        margin-top: 3vh;
        border-radius: 0.5em;
        background-color: #274360;
        border: none;
        font-size: 1em;
        color: white;
        :hover{
                background-color: white;
                border: 1px solid #274360;
                color: black;
            }
        :active{
                background-color: #274360;
            }
    }
}

}`