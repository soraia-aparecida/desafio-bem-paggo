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