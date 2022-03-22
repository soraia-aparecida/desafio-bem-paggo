import React, { useState } from "react"
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [note, setNote] = useState("")

    const states = { cart, note }
    const setters = { setCart, setNote }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState