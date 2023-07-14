import React from "react";
import {
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
  REQUEST_STARTED,
  REQUEST_COMPLETED,
  RESET_REQUEST_FAIL,
  RESET_REQUEST_SUCCESS,
} from "../constant";
import { AppDispatch } from "../store";
import { getEmailId, loginDetails, updatePwd } from "@/service/services";
import { json } from "stream/consumers";

export const signup = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: REQUEST_STARTED, payload: null });

  const res = await fetch("http://localhost:3000/api/user/auth?action=SIGNUP", {
    method: "POST",

    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  if (res.ok === true) {
    console.log("inside if sign up api in user.ts page :::::::::>>>", res);
    dispatch({
      type: SIGNUP_REQUEST_SUCCESS,
      payload: { success: true, message: "Registeration done" },
    });
  } else {
    alert("Email is already Registered. Please log in...");
    dispatch({
      type: SIGNUP_REQUEST_FAIL,
      payload: { success: false, message: "Registeration failed" },
    });
  }

  dispatch({ type: REQUEST_COMPLETED, payload: null });
  //dispatch({ type: SIGNUP_REQUEST_FAIL, payload: null });

  //fail
};

export const login = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action LOGIN: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    const res: any = await loginDetails(data);

    if (res && res.status === 200) {
      console.log("inside if:::::::::", res);

      localStorage.setItem("key", JSON.stringify(res));

      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res });
    } else {
      console.log("inside else:::::::::", res);
      alert("Email Not Registered. Please Sign Up or incorrect password...");
      dispatch({ type: LOGIN_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
    alert("Email Not Registered. Please Sign Up ...");
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });

  //fail
};

export const reset = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action RESET: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    //api call
    const res = await getEmailId(data).then();
    if (res && res.status === 200) {
      console.log("inside if:::::::::", res);
      dispatch({ type: RESET_REQUEST_SUCCESS, payload: res });
    } else {
      alert("Email Not Registered. Please Sign Up ...");
      dispatch({ type: RESET_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
    alert("Email Not Registered. Please Sign Up ...");
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });

  //fail
};

export const updatepasswordAction =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: REQUEST_STARTED, payload: null });

      const res = await updatePwd(data);
      if (res && res.status === 200) {
        console.log("update response is..", res);
        dispatch({ type: RESET_REQUEST_SUCCESS, payload: res });
      } else {
        alert("Password Not updated.");
        dispatch({ type: RESET_REQUEST_FAIL, payload: null });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };
