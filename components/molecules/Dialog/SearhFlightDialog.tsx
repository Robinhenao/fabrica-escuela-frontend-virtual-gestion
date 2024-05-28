import React, { Dispatch, SetStateAction, useEffect } from "react"


import { Flight } from "app/api/gestion/gestion"
import { FlightOperation } from "app/gestion/lista/page"
import useForm from "app/hooks/useForm"

type SearhFlightDialogProps = {
  action: "SEARCH"
  flightToUpdate?: Flight
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
  syncFlights: () => void
}


const SearhFlightDialog: React.FC<SearhFlightDialogProps> = ({ flightToUpdate, action, setCurrentOperation, syncFlights }) => {
  const { formValues, handleInputChange, resetForm } = useForm<Partial<Flight>>({})

  const {
    numeroVuelo,
    tipoVuelo,
    idAeropuertoDestino,
    idAeropuertoOrigen,
    idTipoAvion,
    precio,
    cantidadPasajeros,
    sobretasa,
    porcentajeImpuestos,
    fechaSalida,
    fechaLlegada
  } = formValues

  const handleOkAction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    setCurrentOperation({
      action: "",
    })
  }

  useEffect(() => {
    if (action === 'SEARCH') {
        resetForm({
          ...flightToUpdate
      })

    }
  },[])


 
console.log(flightToUpdate)
  return (
    <React.Fragment>
      <div className="relative flex justify-center">
        <div className="fixed inset-0 z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <div className="relative inline-block max-h-[85vh] overflow-auto rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-xl sm:p-6 sm:align-middle">
              <h3
                className="text-center text-lg  font-medium capitalize leading-6 text-gray-800 dark:text-white"
                id="modal-title"
              >
                Flight information 
                
              </h3>

              <hr className="container my-3" />

              <form  className="mt-4" action="#">
                <label htmlFor="numeroVuelo" className="text-sm text-gray-700 dark:text-gray-200">
                  Número de vuelo
                </label>

                <label className="block" htmlFor="numeroVuelo">
                  <input
                    type="text"
                    name="numeroVuelo"
                    id="numeroVuelo"
                    value={numeroVuelo}
                    // onChange={handleInputChange}
                    placeholder="Ej: Vuelo-123"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="tipoVuelo" className="text-sm text-gray-700 dark:text-gray-200">
                  Tipo de vuelo
                </label>
                <label className="block" htmlFor="tipoVuelo">
                  <input
                    type="text"
                    name="tipoVuelo"
                    id="tipoVuelo"
                    value={tipoVuelo}
                    // onChange={handleInputChange}
                    placeholder="Ej: Internacional"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="idAeropuertoOrigen" className="text-sm text-gray-700 dark:text-gray-200">
                  Id Aeropuerto Origen
                </label>
                <label className="block" htmlFor="idAeropuertoOrigen">
                  <input
                    type="number"
                    name="idAeropuertoOrigen"
                    id="idAeropuertoOrigen"
                    value={idAeropuertoOrigen}
                    // onChange={handleInputChange}
                    placeholder="Ej: 1"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="idAeropuertoDestino" className="text-sm text-gray-700 dark:text-gray-200">
                  Id Aeropuerto Destino
                </label>
                <label className="block" htmlFor="idAeropuertoOrigen">
                  <input
                    type="number"
                    name="idAeropuertoDestino"
                    id="idAeropuertoDestino"
                    value={idAeropuertoDestino}
                    // onChange={handleInputChange}
                    placeholder="Ej: 2"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="idTipoAvion" className="text-sm text-gray-700 dark:text-gray-200">
                  Id Tipo Avión
                </label>
                <label className="block" htmlFor="idTipoAvion">
                  <input
                    type="number"
                    name="idTipoAvion"
                    id="idTipoAvion"
                    value={idTipoAvion}
                    // onChange={handleInputChange}
                    placeholder="Ej: 2"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="fechaSalida" className="text-sm text-gray-700 dark:text-gray-200">
                  Fecha Salida
                </label>
                <label className="block" htmlFor="fechaSalida">
                  <input
                    type="text"
                    name="fechaSalida"
                    id="fechaSalida"
                    value={fechaSalida?.toLocaleString()}
                    // onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="fechaLlegada" className="text-sm text-gray-700 dark:text-gray-200">
                  Fecha Llegada
                </label>
                <label className="block" htmlFor="fechaLlegada">
                  <input
                    type="text"
                    name="fechaLlegada"
                    id="fechaLlegada"
                    value={fechaLlegada?.toLocaleString()}
                    // onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="precio" className="text-sm text-gray-700 dark:text-gray-200">
                  Precio
                </label>
                <label className="block" htmlFor="precio">
                  <input
                    type="number"
                    name="precio"
                    id="precio"
                    value={precio}
                    placeholder="Ej: 1000"
                    // onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="cantidadPasajeros" className="text-sm text-gray-700 dark:text-gray-200">
                  Cantidad de Pasajeros
                </label>
                <label className="block" htmlFor="cantidadPasajeros">
                  <input
                    type="number"
                    name="cantidadPasajeros"
                    id="cantidadPasajeros"
                    value={cantidadPasajeros}
                    placeholder="Ej: 1000"
                    // onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="sobretasa" className="text-sm text-gray-700 dark:text-gray-200">
                  Sobretasa
                </label>
                <label className="block" htmlFor="sobretasa">
                  <input
                    type="number"
                    name="sobretasa"
                    id="sobretasa"
                    value={sobretasa}
                    placeholder="Ej: 5.2"
                    // onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label htmlFor="porcentajeImpuestos" className="text-sm text-gray-700 dark:text-gray-200">
                  Porcentaje de Impuestos
                </label>
                <label className="block" htmlFor="porcentajeImpuestos">
                  <input
                    type="number"
                    name="porcentajeImpuestos"
                    id="porcentajeImpuestos"
                    value={porcentajeImpuestos}
                    placeholder="Ej: 10.5"
                    // onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <div className="mt-4 sm:-mx-2 sm:flex sm:items-center">
                  <button
                    type="button"
                    onClick={handleOkAction}
                    className="mt-3 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2"
                  >
                    Ok
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearhFlightDialog
