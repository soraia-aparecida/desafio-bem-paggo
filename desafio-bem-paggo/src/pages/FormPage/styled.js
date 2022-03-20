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
        justify-content: center;
        margin-top: 5vh;
        h2{
            margin-left: 2vw;
            margin-bottom: 2vh;
        }
    }
`

export const CardInfo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
/* border: 2px solid red; */
width: 100%;
height: 30vh;
justify-content: space-around;

   div{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        /* background-color: pink;     */
        height: 95%;    
    img{
        width: 100%;
        height: 80%;
        /* border: 1px solid red;   */
    }
    h4{
        margin-top: -2vh;
    }
    div{
        display: flex;
        flex-direction: row;
        border: none;
        margin-top: 0.2vh;
        p{
            font-size: 18px;
        }
        button{
            width: 3vw;
            height: 3vh;
            margin: 5px;
            background-color: #274360;
            border: none;
            border-radius: 7px;
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