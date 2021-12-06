
 import {createContext, useState,useContext} from  'react'

 const CartContext = createContext ()


   export const useCartContext = () => useContext (CartContext)

     const CartContextProvider = ({children}) => {

     const[ cartList , setCartList] = useState ([])
     const [formData, setFormData] = useState({nombre:"", apellido:"", telefono:"", email:"", emailvalidation:""});

    const totalItemCart = () => {
        return cartList.reduce((acum,prod) => acum + prod.quantity,0)
    }

    function addToCart(item){


    const index = cartList.findIndex(elem => elem.id === item.id)

        if (index > -1) {
            const oldQuantity = cartList[index].quantity

            cartList.splice(index, 1)
            setCartList([...cartList, {...item, quantity: item.quantity + oldQuantity }])
        }
        else {
            setCartList([...cartList, item])
        }
    }

    
   const totalPrice =() => {

       return cartList.reduce((acumulate,prod)=> acumulate + (prod.quantity * prod.price) , 0     )
   }
    const deleteItem = (id) => {
        setCartList (cartList.filter(prod => prod.id !== (id) ))
    }
    const deleteCart =() =>{
        setCartList ([])
    }
    function addCart (items) {
        setCartList([...cartList,items])
    }

    const handleChange = (e) => {
        setFormData ({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
   
   
    return (
        <CartContext.Provider value={{
            cartList, 
          
            addCart,
            totalPrice,
            deleteItem,
            deleteCart,
            addToCart,
            totalItemCart,
            handleChange,
            formData
           }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
 