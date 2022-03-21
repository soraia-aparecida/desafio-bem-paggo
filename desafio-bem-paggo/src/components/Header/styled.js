import styled from "styled-components"

export const Container = styled.div`
text-align: center;
header{
    width: 100%;
    height: 21vh;
    background-color: #274360;
    border-radius: 10px 10px 50% 50% / 5px 5px 80% 15%;
    display: flex;

   div{
       width: 60%;
       display: flex;  
       flex-direction: column;
       align-items: flex-start;
       margin-left: 2.7vw;
       margin-top: 2vw;
       
       p{
           font-size: 1.5em;
           color: white;
       } 
       h2{
        color: white;
        font-size: 1.7em;
       }

       h1{
        color: white;
        font-size: 3em;
       }
      
   }

       img{
        width: 17vw;
        margin-right: 3.5vw;
        transform: scaleX(-1);
        margin-bottom: 0.9vh;
        }  
   
   
  
}
`