import {
  TRAIN_BY_ID_REQUEST_SUCCESS,
  TRAIN_REQUEST_FAIL,
  TRAIN_REQUEST_SUCCESS,
  TRAIN_TICKET_REQUEST_SUCCESS,
  TRAIN_UPDATE_REQUEST_SUCCESS,
  USER_TRAIN_SEARCH_SUCCESS,
} from "../constant";

export const initialState = {
  trainDetails: null,
  getTrainById: null,
  userTrainDeatils: null,
  trainTicketDetails: null,
};

export const TrainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TRAIN_REQUEST_SUCCESS: {
      console.log("data in train reducer******************: ", action.payload);
      return {
        ...state,
        loading: false,
        trainDetails: action.payload,
      };
    }

    case TRAIN_UPDATE_REQUEST_SUCCESS: {
      console.log("data in train reducer>>>>>>>>>>>>>>>>: ", action.payload);
      return {
        ...state,
        loading: false,
        trainDetails: action.payload,
      };
    }

    case TRAIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };

    case TRAIN_BY_ID_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        getTrainById: action.payload,
      };
    case USER_TRAIN_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        userTrainDetails: action.payload,
      };

      case TRAIN_TICKET_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          trainTicketDetails: action.payload,
        };

    default: {
      return state;
    }
  }
};
