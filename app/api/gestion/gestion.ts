import axios from "axios"

export interface FlightsResponse {
  vuelos: Flight[]
  totalItems: number
}

export interface Flight {
  id?: number
  numeroVuelo: string
  tipoVuelo: string
  idAeropuertoDestino: number
  idAeropuertoOrigen: number
  idTipoAvion: number
  fechaSalida: Date
  fechaLlegada: Date
  precio: number
  cantidadPasajeros: number
  sobretasa: number
  porcentajeImpuestos: number
}

const API_VUELOS_URL = 'https://fabrica-backend-virtual-production.up.railway.app'

export const fetchAllFlights = (page: number, size: number): Promise<FlightsResponse> => {
  return axios.get<FlightsResponse>(`${API_VUELOS_URL  + '/api/v1/vuelos'}?page=${page}&size=${size}`).then(({ data }) => data)
}

export const fetchFlightbyNumeroVuelo = (numeroVuelo: string): Promise<Flight> => {
  return axios.get<Flight>(`${API_VUELOS_URL  + '/api/v1/vuelos'}/${numeroVuelo}`).then(({ data }) => data)
}

export const createFlight = (flight: Flight): Promise<void> => {
  // TODO: Enviar token en el header
  // const headers = {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // }

  return axios
    .post<void>(
      `${API_VUELOS_URL + '/api/v1/vuelos'}`,
      { ...flight },
      {
        /* headers */
      }
    )
    .then(({ data }) => data)
}
export const updateFlight = (flight: Flight): Promise<void> => {
  // TODO: Enviar token en el header
  // const headers = {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // }

  return axios
    .put<void>(
      `${API_VUELOS_URL  + '/api/v1/vuelos'}`,
      { ...flight },
      {
        /* headers */
      }
    )
    .then(({ data }) => data)
}

export const deleteFlight = (flightID: number): Promise<void> => {
  const options = {
    method: "DELETE",
    url: `${API_VUELOS_URL}/api/v1/vuelos/${flightID}`
  }
  return axios
    .request(options)
    .then(({ data }) => data)
}
