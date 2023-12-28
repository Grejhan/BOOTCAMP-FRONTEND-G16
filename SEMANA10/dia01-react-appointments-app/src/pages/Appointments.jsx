import { useState } from "react"
import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"


const Appointments = () => {
  
  const [appointments,setAppointments] = useState([])

  const [appointmentSelected, setAppointmentSelected] = useState ({})

  const handleSaveAppointment = (form) =>{
    //Guardamos lo que nos entrege el AppointmentsForm en el estado apointments
    console.log(form)

    setAppointments([...appointments, form])
  }

  const handleRemove = (id) =>{
    console.log('id', id)

    const newAppointment = appointments.filter(
      Appointments => Appointments.id !== id
    )
    setAppointments(newAppointment)  
  }

  const handleEdit = (Appointment) => {
    console.log(Appointment)
    setAppointmentSelected(Appointment)
  }
  

  return (
    <>
    <AppointmentsForm 
    onSaveAppointment={handleSaveAppointment}
    appointment={appointmentSelected}
    
    
    />

    <AppointmentsList  
    Appointments={appointments}  
    onRemove={handleRemove}
    onEdit={handleEdit}
    
    />

    </>
  )
}

export default Appointments