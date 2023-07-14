export const Config = {
  BASE_URL: "http://localhost:3000/api/",
  // Image_URL:'http://localhost:8080/api/v1/displayImage/'
};

export const ENDPOINTS = {
  resetPwd: "user/auth?action=RESET",
  updatePwd: "user/auth?action=updatepassword",
  loginDetails: "user/auth?action=LOGIN",

  addHotels: "hotelsapi/hotelsapi?action=addHotels",
  getHotels: "hotelsapi/hotelsapi?action=getHotels",
  getHotelById: "hotelsapi/hotelsapi?action=getHotelDetails",
  deleteHotel: "hotelsapi/hotelsapi?action=deleteHotel",
  updateHotel: "hotelsapi/hotelsapi?action=updateHotels",
  searchHotel: "hotelsapi/hotelsapi?action=searchByHotel",
  sortHotelBy: "hotelsapi/hotelsapi?action=sort",
  searchByCity:"hotelsapi/hotelsapi?action=serachByCity",
  bookHotel:"hotelsapi/hotelsapi?action=bookHotel",
  getHotelBookingdata:"hotelsapi/hotelsapi?action=getBookedHotel",
  gethotelbookingdetails:"hotelsapi/hotelsapi?action=getBookedHotelDtailsByOrderId",
  getAllHotels:"hotelsapi/hotelsapi?action=getAllHotels",

  addTrain: "trainApi/trainApi?action=ADD_TRAIN",
  updateTrain: "trainApi/trainApi?action=UPDATE_TRAIN",
  deleteTrain: "trainApi/trainApi?action=DELETE_TRAIN",
  getTrain: "trainApi/trainApi?action=GET_TRAINS",
  getTrainById: "trainApi/trainApi?action=GET_TRAIN_BY_ID",
  searchTrain: "trainApi/trainApi?action=SEARCH_TRAINS",
  trainTicket: "trainApi/trainApi?action=BOOK_TRAIN_TICKET",

  addBus: "busapi/busapi?action=ADD_BUS",
  getAllBuses: "busapi/busapi?action=GET_ALL_BUSES",
  getBusById: "busapi/busapi?action=GET_BUS_BY_ID",
  updateBus: "busapi/busapi?action=UPDATE_BUS",
  deleteBus: "busapi/busapi?action=DELETE_BUS",
  busSearch: "busapi/busapi?action=SEARCH_BUS",

  seatBook: "busapi/busapi?action=BOOK_SEATS",
  getBookedSeat: "busapi/busapi?action=GET_BUS_NUMBER",
  getBookSeatDataById: "busapi/busapi?action=GET_BOOKS_SEATS_DATA_BY_ID",
};
