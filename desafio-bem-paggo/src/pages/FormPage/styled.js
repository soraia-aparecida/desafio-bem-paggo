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
width: 95%;
height: 30vh;
align-items: center;
justify-content: center;
border: 1px solid black;
   div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;    
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
            width: 2.5vw;
            height: 3vh;
            margin: 5px;
            background-color: #274360;
            border: none;
            border-radius: 7px;
            font-size: 18px;
            :hover{
                background-color: white;
                border: 1px solid #274360;
            }
            :active{
                background-color: #274360;
            }
        }
    }
   }
`