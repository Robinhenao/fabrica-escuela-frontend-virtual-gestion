import React, { Dispatch, SetStateAction } from "react";
import { Flight, deleteFlight } from "app/api/gestion";
import { FlightOperation } from "app/gestion/lista/page";
import { toast } from "react-toastify";

type CancelFlightDialogProps = {
  flight?: Flight;
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>;
  syncFlights: () => void;
};

const CancelFlightDialog: React.FC<CancelFlightDialogProps> = ({ flight, setCurrentOperation, syncFlights }) => {
  const handleCancelAction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    setCurrentOperation({
      action: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (flight?.id === undefined) {
      toast.error("Flight ID is missing");
      return;
    }
    return deleteFlight(flight.id)
      .then(() => {
        toast.success("Flight successfully cancelled");
        syncFlights();
        setCurrentOperation({
          action: "",
        });
      })
      .catch((error) => {
        toast.error(`Error canceling flight: ${error.message}`);
      });
  };

  return (
    <React.Fragment>
      <div className="relative flex justify-center">
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-xl sm:p-6 sm:align-middle">
              <h3 className="text-lg font-medium capitalize leading-6 text-gray-800 dark:text-white" id="modal-title">
                Cancelar Vuelo
              </h3>

              <form onSubmit={handleSubmit} className="mt-4" action="#">
                <div className="mt-4 sm:-mx-2 sm:flex sm:items-center">
                  <button
                    type="button"
                    onClick={handleCancelAction}
                    className="w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 sm:mx-2 sm:w-1/2"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="mt-3 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2"
                  >
                    Confirmar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CancelFlightDialog;

