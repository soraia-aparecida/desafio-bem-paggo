import styled from "styled-components"

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#8a2be2, #893dd0);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
}`

export const Form = styled.div`
    width: 40vw;
    height: 95vh;
    background-color: white;
    border-radius: 5%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
        width: 100%;
    }
    section{
        margin-top: 2vh;
        border-radius: 5px;
        min-width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
    
        p{
            position:fixed;
            bottom:20vh;  
            font-weight: bold;
            margin-left: 2vw;
        }
        h2{
            margin-bottom: 2vh;
        }
        h3{
            margin-top: 20vh;
        }
    }
    span{
        margin-top: 12vh;
        display: flex;
        flex-direction: column;        
    }
`
export const CardProdct = styled.div`
    min-width: 95%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img{
        width: 9vw;
        height: 12vh;
    }
    button{
        width: 5vw;
        height: 4vh;
        border: none;
        background-color: white;
        margin-left: 2vw;
    }

`

export const ButtonToGoBack = styled.button`
    background-color: white;
    border: none;
    color:  #274360;
    width: 15vw;
    height: 4.5vh;
    margin: 0.2em;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
`

export const FinishButton = styled.button`
   
    width: 15vw;
    height: 4.5vh;
    border-radius: 5px; 
    background-color: #274360;
    border: none;
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
`
   
