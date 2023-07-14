import React from "react";
import {
  ADD_HOTELS,
  ADD_HOTELS_DATA,
  ADD_HOTELS_FAIL,
  ADD_HOTELS_SUCCESS,
  BOOKHOTEL,
  DELETE_HOTEL,
  HOTEL_BOOKING_DETAILS,
  SAVE_INVOICE_DATA,
  PREVIOUS_HOTEL_DATA,
  REQUEST_COMPLETED,
  REQUEST_STARTED,
  ROOM_DETAILS,
  SAVE_HOTEL_DETAILS,
  SEARCH_HOTELS,
  SORT_By,
  UPDATE_HOTEL_DETAILS,
  BOOKED_HOTELS_LIST,
} from "../constant";
import { AppDispatch } from "../store";
import { ENDPOINTS } from "@/config/config";
import {
  addHotelsInfo,
  bookHotelroom,
  deleteHotel,
  getAllHotelOrder,
  getBookedHotelDtailsByOrderId,
  getHotel,
  getHotelBook,
  hotelsById,
  searchHotel,
  sortHotelBy,
  updateHotelInfo,
} from "@/service/services";
import { hostname } from "os";

/*.................Add hotels..........*/
export const addHotels = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await addHotelsInfo(data);
    if (res && res.status === 200) {
      dispatch({ type: ADD_HOTELS_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ADD_HOTELS_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

/*.....................PreviousDta..............*/

export const savePreviousData =
  (data: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: PREVIOUS_HOTEL_DATA, payload: data });
  };

/*..................get Hotels...............*/

export const getHotels = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await getHotel();
    if (res && res.status == 200) {
      dispatch({ type: ADD_HOTELS_DATA, payload: res.data?.data });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

/*................. get Hotel By Id..........*/
export const getHotelById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let data = { id: id };
    const res = await hotelsById(data);
    if (res && res.status === 200) {
      console.log(res.data);
      dispatch({ type: SAVE_HOTEL_DETAILS, payload: res.data });
      dispatch({ type: REQUEST_COMPLETED, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
};

/*................. update Hotel By Id..........*/
export const updateHotel = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let param = { id: data._id, data: data };
    delete data._id;
    const res = await updateHotelInfo(param);
    if (res && res.status === 200) {
      dispatch({ type: UPDATE_HOTEL_DETAILS, payload: res.data });
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

/*....................delete hotel...................*/

export const deleteHotelById =
  (id: string) => async (dispatch: AppDispatch) => {

    let param = { id: id };
    const res = await deleteHotel(param);
    if (res && res.status == 200) {
      console.log(res);
      dispatch({ type: DELETE_HOTEL, payload: res.data });
    }
  };

  /*.............Search .....................*/

export const searchHotelByName =
  (hotelname: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: REQUEST_STARTED, payload: null });
      let param = { searchKey: hotelname };
      const res = await searchHotel(param);
      if (res && res.status == 200) {
        console.log(res);
        dispatch({ type: SEARCH_HOTELS, payload: res.data?.data });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };

  /*..............search by city...................*/


export const searchCityByName =
  (city: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: REQUEST_STARTED, payload: null });
      let param = { searchKey: city};
      const res = await searchHotel(param);
      if (res && res.status == 200) {
        console.log(res);
        dispatch({ type: SEARCH_HOTELS, payload: res.data?.data });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };
/*...........SORT..........................*/
export const sortHotel = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let type = null;
    if (data == "Low to High") {
      type = "PRICE_LOW";
    } else if (data == "High to Low") {
      type = "PRICE_HIGH";
    } else {
    }
    let param = { sortType: type };
    const res = await sortHotelBy(param);
    if (res && res.status == 200) {
      dispatch({ type: SORT_By, payload: res.data?.data });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

/*..............Room Data................*/

export const  saveSelectedRoomData= (data: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: ROOM_DETAILS, payload: data });
  };


// /*..........hotel booking data...........*/
// export const  hotelBookingData= (data: any) => async (dispatch: AppDispatch) => {
//   dispatch({ type: HOTEL_BOOKING_DATA, payload: data });
// };



/*.................Book hotels..........*/
export const bookHotelRoom= (data:any)=> async(dispatch: AppDispatch) =>{
  console.log(data);
  try{
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res= await bookHotelroom(data);
    if(res && res.status ===200){
      dispatch({type:BOOKHOTEL ,payload:res.data});
    }
  }catch(error){
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });

}

export const getHotelsBookingDetails = (data:any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    // let data = { user_id: user_id };
    const res = await getHotelBook(data);
    if (res && res.status == 200) {
      dispatch({ type: HOTEL_BOOKING_DETAILS, payload: res?.data });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getHotelBookingDetailsById =(data:any) => async (dispatch:AppDispatch)=>{
  try{
    dispatch({type:REQUEST_STARTED,payload:null});
    const res =await getBookedHotelDtailsByOrderId(data);
    console.log("res:------",res)
    if(res && res.status == 200){
      dispatch({type: SAVE_INVOICE_DATA,payload:res?.data?.data});
    }
  }catch(error){
  console.log("Errror:::---",error)
  }
  dispatch({type:REQUEST_COMPLETED,payload:null});
}


export const getAllBookedHotels = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await getAllHotelOrder();
    console.log("res:::::::>>",res)
    if (res && res.status == 200) {
      dispatch({ type: BOOKED_HOTELS_LIST, payload: res?.data?.data });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};