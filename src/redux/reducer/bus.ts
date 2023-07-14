import {
  BUS_BY_ID_REQUEST_SUCCESS,
  BUS_REQUEST_FAIL,
  BUS_REQUEST_SUCCESS,
  BUS_UPDATE_REQUEST_SUCCESS,
  USER_SEARCH_REQUEST_SUCCESS,
} from "../constant";

export const initialState = {
  busDetails: null,
  getBusById: null,
  userBusDetails: null,
};

export const BusReducer = (state = initialState, action: any) => {
  // debugger
  switch (action.type) {
    case USER_SEARCH_REQUEST_SUCCESS: {
      //debugger
      console.log("hnrfhyeth", action.payload);
      return {
        ...state,
        loading: false,
        userBusDetails: action.payload,
      };
    }

    case BUS_BY_ID_REQUEST_SUCCESS:
      console.log("Reducer:::::::::::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        getBusById: action.payload,
      };

    case BUS_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case BUS_REQUEST_SUCCESS: {
      console.log("data in bus reducer: ", action.payload);
      return {
        ...state,
        loading: false,
        busDetails: action.payload,
      };
    }

    case BUS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };

    default: {
      return state;
    }
  }
};
