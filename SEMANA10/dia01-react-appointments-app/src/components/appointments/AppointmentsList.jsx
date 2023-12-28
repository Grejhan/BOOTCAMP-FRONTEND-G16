

const AppointmentsList = ({Appointments, onRemove, onEdit}) => {
  if (Appointments.length === 0)
      return(

        <section className="w-1/2 p-4 bg-white rounded-lg ">
        <h2 className="text-2xl text-center mb-4 ">Listado de Citas</h2>
        <div className="flex justify-center items-center gap-4 h-96 text-2xl">
          No hay Citas.
        </div>
        </section>
  
        )

  return (
    <>
    <section className="w-1/2 p-4 bg-white rounded-lg">
      <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>
      {Appointments.map((Appointment) =>{
        return (
          <div className="flex flex-col gap-3 mb-4" key={Appointment.id}>
          <div className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300"> 
            <h4 className="font-semibold text-lg">MASCOTA</h4>
            <div>
              <strong>Nombre :</strong> {Appointment.petName}
            </div>
            <div>
              <strong>Edad (Anos): </strong> {Appointment.petAge}
            </div>
          
          <div>
          <h4 className="font-semibold text-lg">Duenio</h4>
            <div>
              <strong>Nombre :</strong> {Appointment.ownerName}
            </div>
            <div>
            <h4 className="font-semibold text-lg">Citas</h4>
            <div>
              <strong>Fecha :</strong> {Appointment.appointmentsDate}
            </div>
            <div>
              <strong>Hora :</strong> {Appointment.appointmentsTime}
            </div>
            <div>
              <strong>Sintomas :</strong> {Appointment.symptoms}
            </div>
            <div className="flex flex-col gap-3 mt-3">
            <button className="p-2 bg-green-900 text-white rounded-lg">
              Confirmas Cita
            </button>
            <button 
              className="p-2 bg-blue-900 text-white rounded-lg"
              onClick={ () => onEdit(Appointment)}
              >
              Editar
              </button>
              <button 
                className="p-2 bg-red-900 text-white rounded-lg"
                  onClick={ () => onRemove(Appointment.id)}
                >
                Eliminar
              </button>
              </div>
            </div>
          </div>
      </div>
    </div> 
        )

      })}
  

    </section>
    </>
  )
}

export default AppointmentsList