import { useEffect, useState } from "react"




const AppointmentsForm = ({onSaveAppointment, appointment}) => {
  const INITIAL_FORM_STATE = {
    
      id:"",
      petName:"",
      petAge:"",
      ownerName:"",
      appointmentsDate:"",
      appointmentsTime:"",
      symptoms:"",
    
  }
const [form, setForm] = useState( INITIAL_FORM_STATE)

useEffect(() =>{
    console.log('estoy en el form y solo me ejecuto cuando se crea el formulario')

    const hasAppointment = appointment && Object.keys(appointment).length > 0

    if (hasAppointment) {
      setForm(appointment);
    }
  }, [appointment]);
  
const handleChange = (event) => {
  //console.log(event.target.name)
  //console.log(event.target.value)
  const name = event.target.name
  const value = event.target.value

  setForm({ ...form, [name]: event.target.value })
}

const handleSaveAppointment = (event) =>{
  event.preventDefault();

  const newAppointment = {
    ...form,
    id: crypto.randomUUID() 
  }
  console.log('Guardando Cita...', newAppointment)

  onSaveAppointment(newAppointment)

  setForm(INITIAL_FORM_STATE)
}

  return (
    <section className="w-96 p-4">
        <h2 className="text-2xl text-center mb-4 " >Nuevo paciente</h2>



        <form className="flex flex-col gap-4 " onSubmit={handleSaveAppointment}>
            <input 
            type="text"
            name="petName"
            placeholder="Nombre de mi Mascota"
            className="border p-3 shadow-md rounded-md"
            onChange={handleChange}
            value={form.petName}
            />
            <input 
            type="text"
            name="petAge"
            min="0"
            max="50"
            placeholder="Edad de mi Mascota"
            className="border p-3 shadow-md rounded-md"
            onChange={handleChange}
            value={form.petAge}
            />
            <input 
            type="text"
            name="ownerName"           
            placeholder="Duenio de la Mascorta"
            className="border p-3 shadow-md rounded-md"
            onChange={handleChange}
            value={form.ownerName}
            />
            <input 
            type="date"
            name="appointmentsDate"
            placeholder="Fecha de la cita"
            className="border p-3 shadow-md rounded-md"
            onChange={handleChange}
            value={form.appointmentsDate}
            />
            <input 
            type="time"
            name="appointmentsTime"
            placeholder="Hora de la Cita"
            className="border p-3 shadow-md rounded-md"
            onChange={handleChange}
            value={form.appointmentsTime}
            />
            
            <textarea 
            name="symptoms"
            placeholder="Sintomas"
            className="border p3 shadow-md rounded-md"
            rows={3}
            onChange={handleChange}
            value={form.symptoms}
            />
            <input
            type="submit"
            className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
            value="Guardar"
            
            />
          <pre>
            {JSON.stringify(form, null, 2)}
          </pre>

            

        </form>
    </section>
  )
}

export default AppointmentsForm