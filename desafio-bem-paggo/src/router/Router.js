import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormPage from "../pages/FormPage/FormPage"
import CartPage from "../pages/CartPage/CartPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FormPage />} />
                <Route path={"/carrinho"} element={<CartPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router