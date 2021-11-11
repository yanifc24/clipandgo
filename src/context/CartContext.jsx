
 import {createContext, useState,useContext} from  'react'

 const CartContext = createContext ()

export const useCartContext = () => useContext (CartContext)



 const CartContextProvider = ({children}) => {
    const[ cartList , setCartList] = useState ([])
    
    /* const addToCart = (prod,cantidad) =>{

        const isInCart = (id) =>{cartList.find(element => element.prod.id === prod.id)
       
            if (isInCart = true) {isInCart.cantidad + prod.cantidad
                setCartList(cartList)
            }
            else {
                setCartList(previousItems => [...previousItems, cantidad])
            }
    }
    
    
    
    }   */

    function addCart (items) {
        setCartList([...cartList,items])
    }

    const showList = () => {
         console.log (cartList)
     }
    return (
        <CartContext.Provider value={{
            cartList, 
            showList,
            addCart,
            
           }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
 