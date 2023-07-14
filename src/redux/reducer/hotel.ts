import {
  ADD_HOTELS,
  ADD_HOTELS_FAIL,
  ADD_HOTELS_SUCCESS,
  PREVIOUS_HOTEL_DATA,
  ADD_HOTELS_DATA,
  UPDATE_HOTEL_DETAILS,
  SAVE_HOTEL_DETAILS,
  DELETE_HOTEL,
  SEARCH_HOTELS,
  SORT_By,
  ROOM_DETAILS,
  SEARCH_CITY,
  BOOKHOTEL,
 HOTEL_BOOKING_DETAILS,
 SAVE_INVOICE_DATA,
 BOOKED_HOTELS_LIST,

} from "../constant";
export const initialState = {
  loading: false,
  hotelDetails: undefined,
  previousHotelData: null,
  updateHotelDetails: null,
  updateHotelData: null,
  roomData: null,
  booked_hotel_res: null,
  booked_hotel_history:[],
  invoice_data:null,
  hotels_list:[],
 
};

export const HotelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_HOTELS:
      return {
        ...state,
        loading: true,
        hotelDetails: undefined,
      };

    case ADD_HOTELS_SUCCESS: {
      console.log("data in typereducer: ", action.payload);
      return {
        ...state,
        loading: false,
        hotelDetails: action.payload,
      };
    }

    case ADD_HOTELS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case ADD_HOTELS_DATA:
      return {
        ...state,
        loading: false,
        hotelDetails: action.payload,

      };

    case PREVIOUS_HOTEL_DATA: {
      return {
        ...state,
        previousHotelData: action.payload,

      }
    };
    case SAVE_HOTEL_DETAILS: {
      console.log("data in typereducer: ", action.payload);
      return {
        ...state,
        loading: false,
        updateHotelDetails: action.payload,

      }
    };
    case UPDATE_HOTEL_DETAILS: {
      return {
        ...state,
        loading: false,
        updateHotelData: action.payload,

      }
    };
    case DELETE_HOTEL: {
      return {
        ...state,
        loading: false,
        deletedStatus: action.payload,

      }
    };

    case SEARCH_HOTELS: {
      return {
        ...state,
        hotelDetails: action.payload,
      }
    }

    case SORT_By: {
      return {
        ...state,
        hotelDetails: action.payload,
      }
    }
    case ROOM_DETAILS: {
      return {
        ...state,
        roomData: action.payload,
      }
    }

    case SEARCH_CITY: {
      return {
        ...state,
        hotelDetails: action.payload,
      }
    }

    case BOOKHOTEL: {
      return {
        ...state,
        booked_hotel_res: action.payload,
      }
    }

    case HOTEL_BOOKING_DETAILS: {
      return {
        ...state,
        booked_hotel_history: action.payload,
      }
    }
 case SAVE_INVOICE_DATA:{
  return{
    ...state,
    invoice_data: action.payload,
  }
 }
 case BOOKED_HOTELS_LIST:{
  return{
    ...state,
    hotels_list: action.payload,
  }
 }
    default: {
      return state;
    }
  }
};
