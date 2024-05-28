import React, { Dispatch, SetStateAction } from "react"

import { FlightOperation } from "app/gestion/lista/page"
import CancelFlightDialog from "./CancelFlightDialog"
import CreateFlightDialog from "./CreateFlightDialog"
import SearhFlightDialog from "./SearhFlightDialog"

type FlightDialogsProps = {
  currentOperation: FlightOperation
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
  syncFlights: () => void
}

const FlightDialogs: React.FC<FlightDialogsProps> = (props) => {
  const { currentOperation, setCurrentOperation, syncFlights } = props
  const { flight, action } = currentOperation

  if (action === "") return <></>

  if (action === "CREATE") {
    return <CreateFlightDialog syncFlights={syncFlights} action="CREATE" setCurrentOperation={setCurrentOperation} />
  }

  if (action === "UPDATE") {
    return (
      <CreateFlightDialog flightToUpdate={flight} syncFlights={syncFlights} action="UPDATE" setCurrentOperation={setCurrentOperation} />
    )
  }

  if (action === "SEARCH") {
    return (
      <SearhFlightDialog  flightToUpdate={flight} syncFlights={syncFlights} action="SEARCH" setCurrentOperation={setCurrentOperation} />
    )
  }

  if (action === "DELETE") {
    return <CancelFlightDialog syncFlights={syncFlights} flight={flight} setCurrentOperation={setCurrentOperation} />
  }


  return <></>
}

export default FlightDialogs
