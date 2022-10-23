import {createContext, useContext, useState, useEffect} from "react";
const ContextForCart = createContext({})
export function useCartData() {
    return useContext(ContextForCart)
}
export function CartItem({children}) {
    const [products, setProducts] = useState([])
    const apiPull = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        return json 
    }
    useEffect(() => {
        apiPull().then(data => {return setProducts(data)})
    }, [])
}
