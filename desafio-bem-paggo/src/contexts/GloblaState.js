import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [carrinho, setCarrinho] = useState([])

    return (
        <GlobalStateContext.Provider value={[carrinho, setCarrinho]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState