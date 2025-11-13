import { useState } from "react"

export default function Checkout (props) {
const [formData, setFormData] = useState(
    {
        username: "",
        email: "",
        phone:"", 
    }
);
function handleSubmit(event){
event.preventDefault();
props.handleCheckout(formData);

}

function handleChange (event){
    const inputName = event.target.name;
    const value = event.target.value;
    const newFormData = {...formData};
    newFormData[inputName] = value;
    setFormData(newFormData)
}


function clearForm () {
    setFormData({
        
            username: "",
            email: "",
            phone:"", 
        
    })
}


    return <form onSubmit={handleSubmit}>
        <h1>Ingresa tus datos personales</h1>
        <div>
            <label>Nombre
                <input value={formData.username} onChange={handleChange} name="username" required type="text" placeholder="Nombre.."/>
            </label>
            <label>Email
                <input value={formData.email} onChange={handleChange} name="email"  required type="email" placeholder="email@emial"/>
            </label>
            <label>Telefono
                <input value={formData.phone} onChange={handleChange} name="phone" required type="tel" placeholder="13242526"/>
            </label>
        </div>
        <button type="submit"> Confirmar </button>
        <button onClick={clearForm} type="button"> Limpiar Formulario</button>
    </form>
    
}