import { useCartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';

const Form = ({generateOrder}) =>{
const {handleChange, formData} = useCartContext();

return(
    <div>
    <form className="formWidth" onChange={handleChange}  onSubmit={(e) => {
     e.preventDefault()
            formData.email === formData.emailValidation  ? generateOrder()
                : 
             Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Los correos electrónicos no son idénticos. Intente de nuevo.',
                  })
       }}>
        
        <legend className="form-legend">Ingresá tus datos</legend>
        <div>
        <hr/>
            <label htmlFor="name" className="form-label formSpace"></label>
            <input type="text" required name="nombre" placeholder="Nombre" defaultValue={formData.nombre}/>
        </div>
        <div>
            <label htmlFor="surname" className="form-label formSpace"></label>
            <input type="text" required name="apellido" placeholder="Apellido" defaultValue={formData.apellido}/>
        </div>
        <div>
            <label htmlFor="phone" className="form-label formSpace"></label>
            <input type="text" required name="telefono" placeholder="Teléfono" defaultValue={formData.telefono}/> 
        </div>
        <div>
            <label htmlFor="email" className="form-label formSpace"></label>
            <input type="email" required name="email" placeholder="Email" defaultValue={formData.email}/>     
        </div>
        <div>
             <label htmlFor="validation" className="form-label formSpace" >Ingresa nuevamente tu email</label>
             <input type="email" name="emailValidation" placeholder="ejemplo@tuemail.com" defaultValue={formData.emailValidation} required/> 
        </div>
        <button className="buttonGrey">COMPRAR</button>
    </form>
    </div>  )
    }
 
  export default Form