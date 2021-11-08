
/* import {createContext, useState,useContext} from  'react'

 const CartContext = createContext ()

export const useCartContext = () => useContext (CartContext)

 const CartContextProvider = ({children}) => {
    const[ cartList , setCartList] = useState ([])

    function addCart (items) {setCartList(items)}

    const showList = () => {
         console.log (cartList)
     }
    return (
        <CartContext.Provider value={{
            cartList, 
            showList,
            addCart}}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
 */