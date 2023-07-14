import {
  getBookSeatsDataInvoice,
  getBusSeatNumber,
  seatBook,
} from "@/service/services";
import {
  BOOK_SEAT_SUCCESS,
  BUS_REQUEST_FAIL,
  BUS_SEATS_BOOK_SUCCESS,
  REQUEST_BOOKED_SEATS,
  REQUEST_COMPLETED,
  REQUEST_INVOICE_BUS_DATA,
  REQUEST_STARTED,
} from "../constant";
import { AppDispatch } from "../store";

export const book_seats = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action book_seats: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    // const res = await seatBook(data);

    if (data) {
      console.log("inside if condition in book_seats data... ", data);

      dispatch({ type: BUS_SEATS_BOOK_SUCCESS, payload: data });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const seats = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await seatBook(data);

    if (res && res.status === 200) {
      console.log("response in seats action======", res);
      dispatch({ type: BOOK_SEAT_SUCCESS, payload: res });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    throw error;
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getBookedSeats = (data: any) => async (dispatch: AppDispatch) => {
  try {
    console.log("called getBookedSeats action", data);
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await getBusSeatNumber(data);
    if (res && res.status === 200) {
      console.log("response getBusSeatNumber ======", res);
      dispatch({ type: REQUEST_BOOKED_SEATS, payload: res });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    throw error;
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getInvoiceDataInDB =
  (_id: any) => async (dispatch: AppDispatch) => {
    try {
      console.log("called getInvoiceDataInDB action", _id);
      let data = { _id: _id };

      dispatch({ type: REQUEST_STARTED, payload: null });
      const res = await getBookSeatsDataInvoice(data);
      console.log("response outside if getInvoiceDataInDB ======", res);

      if (res && res.status === 200) {
        console.log("response getInvoiceDataInDB ======", res);
        dispatch({ type: REQUEST_INVOICE_BUS_DATA, payload: res });
      } else {
        dispatch({ type: BUS_REQUEST_FAIL, payload: null });
      }
    } catch (error) {
      throw error;
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };
