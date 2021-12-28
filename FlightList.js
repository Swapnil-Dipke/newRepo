import { useEffect, useState } from "react";
import { getFlightListById, getFlightList } from "./FlightListService";

export default () => {
  const [flightList, setFlightList] = useState([]);

  useEffect(() => {
    getFlightList().then((response) => {
      if (response && response.data) {
        setFlightList(response.data);
      }
    });
  }, []);
  const onGetDetailsClickHandler = (flightId) => {
    getFlightListById(flightId).then((response) => {
      if (response && response.data) {
        alert("Name: " + response.data.flightId);
      }
    });
  };

  return (
    <>
      <h1 className="text-centre">Flight List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>flight Id</th>
            <th>flight Name</th>
            <th>destination Location</th>
            <th>source Location</th>
            <th>departure Time</th>
            <th>arrival Date Time</th>
            <th>economy ClassPrice</th>
            <th>buissness ClassPrice</th>
            <th>total Economy Seats</th>
            <th>total Business Seats</th>
            <th>available Economy Seats</th>
            <th>available Buissness Seats</th>
          </tr>
        </thead>
        <tbody>
          {flightList.map((flight) => {
            return (
              <tr key={flight.flightId}>
                <td>{flight.flightId}</td>
                <td>{flight.flightName}</td>
                <td> {flight.destinationLocation} </td>
                <td> {flight.sourceLocation} </td>
                <td> {flight.departureTime} </td>
                <td> {flight.arrivalDateTime}</td>
                <td> {flight.economyClassPrice} </td>
                <td> {flight.buissnessClassPrice} </td>
                <td> {flight.totalEconomySeats} </td>
                <td> {flight.totalBUissnessSeats} </td>
                <td> {flight.availableEconomySeats} </td>
                <td> {flight.availableBuissnessSeats} </td>

                <td>
                  <button
                    onClick={() => {
                      onGetDetailsClickHandler(flight.flightId);
                    }}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
