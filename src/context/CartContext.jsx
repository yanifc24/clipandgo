
 import {createContext, useState,useContext} from  'react'

 const CartContext = createContext ()

export const useCartContext = () => useContext (CartContext)



 const CartContextProvider = ({children}) => {
    const[ cartList , setCartList] = useState ([])
 

    function addToCart(item){

        const index = cartList.findIndex(elem => elem.id === item.id)

        if (index > -1) {
            const oldQuantity = cartList[index].cantidad

            cartList.splice(index, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + oldQuantity }])
        }
        else {
            setCartList([...cartList, item])
        }
    }

    
   const totalPrice =() => {

       return cartList.reduce((acumulate,prod)=> acumulate + (prod.cantidad * prod.price) , 0     )
   }
    const deleteItem = (id) => {
        setCartList (cartList.filter(prod => prod.id !== parseInt(id) ))
    }
    const deleteCart =() =>{
        setCartList ([])
    }
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
            totalPrice,
            deleteItem,
            deleteCart,
            addToCart,
          
           }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
 