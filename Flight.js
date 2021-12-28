import { useEffect, useState } from "react";
import { getFlightList, getFlightById } from "./FlightService";

export default () => {
  const [FlightList, setFlightList] = useState([]);
  const [flightName, setFlightName] = useState("");
  const [sourceLocation, setSourceLocation] = useState("");
  const [destinationLocation, setdestinationLocation] = useState("");
  const [departureDateTime, setDepartureDateTime] = useState("");
  const [arrivalDateTime, setArrivalDateTime] = useState("");
  const [economySeatPrice, setEconomySeatPrice] = useState("");
  const [businessSeatPrice, setBusinessSeatPrice] = useState("");
  const [totalEconomySeats, setTotalEconomySeats] = useState("");
  const [totalBusinessSeats, setTotalBusinessSeats] = useState("");
  const [availableEconomySeats, setAvailableEconomySeats] = useState("");
  const [availableBusinessSeats, setAvailableBusinessSeats] = useState("");
};
