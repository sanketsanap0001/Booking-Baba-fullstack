import { REQUEST_COMPLETED, REQUEST_STARTED } from "../constant";
export const initialState = {
  loading: false,
};

export const ApplicationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
        error:''
      };

    case REQUEST_COMPLETED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
