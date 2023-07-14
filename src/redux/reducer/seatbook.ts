import {
  BOOK_SEAT_SUCCESS,
  BUS_SEATS_BOOK_SUCCESS,
  REQUEST_BOOKED_SEATS,
  REQUEST_INVOICE_BUS_DATA,
} from "../constant";

export const initialState = {
  bookSeats: undefined,
  seats: undefined,
  bookedSeats: undefined,
  invoiceData: undefined,
};

export const seatBookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BUS_SEATS_BOOK_SUCCESS:
      console.log("seat books reducer ::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        bookSeats: action.payload,
      };

    case BOOK_SEAT_SUCCESS:
      console.log("seat books reducer ::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        seats: action.payload,
      };

    case REQUEST_BOOKED_SEATS:
      console.log("REQUEST_BOOKED_SEATS_DATA::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        bookedSeats: action.payload,
      };
    case REQUEST_INVOICE_BUS_DATA:
      console.log("REQUEST_INVOICE_BUS_DATA::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        invoiceData: action.payload,
      };

    default: {
      return state;
    }
  }
};
