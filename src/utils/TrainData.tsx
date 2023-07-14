import moment from "moment";

const TABLE_HEAD = ["Train Name", "Departure", "Duration", "Arrival", ""];
const TABLE_ROWS = [
  {
    trainName: "Ashram Express",
    departure: "12:00",
    duration: "18h 55m",
    arrival: "18:15 PM",
  },
  {
    trainName: "PBR Express",
    departure: "11:00",
    duration: "18h 55m",
    arrival: "18:15 PM",
  },
  {
    trainName: "Okha Rajdhani",
    departure: "01:00",
    duration: "18h 55m",
    arrival: "18:15 PM",
  },
  {
    trainName: "Bhopal Express",
    departure: "05:00",
    duration: "18h 55m",
    arrival: "18:15 PM",
  },
  {
    trainName: "Intercity Express",
    departure: "05:00",
    duration: "18h 55m",
    arrival: "18:15 PM",
  },
];

const dateData = [
  { id: 1, date: moment().format("LL") },
  { id: 2, date: moment().add(1, "day").format("LL") },
  { id: 3, date: moment().add(2, "day").format("LL") },
  { id: 4, date: moment().add(3, "day").format("LL") },
  { id: 5, date: moment().add(4, "day").format("LL") },
];

export { TABLE_HEAD, TABLE_ROWS, dateData };
