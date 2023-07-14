import React from "react";
import {
  BUS_BY_ID_REQUEST_SUCCESS,
  BUS_REQUEST_FAIL,
  BUS_REQUEST_SUCCESS,
  BUS_UPDATE_REQUEST_SUCCESS,
  REQUEST_COMPLETED,
  REQUEST_STARTED,
  USER_SEARCH_REQUEST_SUCCESS,
} from "../constant";
import { AppDispatch } from "../store";
import {
  addBus,
  busSearch,
  deleteBus,
  getAllBuses,
  getBusById,
  updateBus,
} from "@/service/services";

export const addBuses = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    const res = await addBus(data);

    if (res && res.status === 200) {
      console.log("inside if:::::::::", res);

      dispatch({ type: BUS_UPDATE_REQUEST_SUCCESS, payload: data });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const deleteBusAction = (id: any) => async (dispatch: AppDispatch) => {
  console.log("id in action: ", id);

  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let data = { _id: id };
    const res = await deleteBus(data);

    if (res && res.status === 200) {
      console.log("inside if:::::::::", JSON.stringify(res));
      dispatch({ type: BUS_UPDATE_REQUEST_SUCCESS, payload: res });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const updateBusAction = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    const res = await updateBus(data);

    if (res && res.status === 200) {
      console.log("inside if:::::::::", JSON.stringify(res));

      dispatch({ type: BUS_UPDATE_REQUEST_SUCCESS, payload: res });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getBusesById = (id: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let data = { _id: id };
    const res = await getBusById(data);

    if (res && res.status === 200) {
      console.log("new Response :::::::::::::{}{}{}{} ", res.data);
      dispatch({ type: BUS_BY_ID_REQUEST_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getBusBySearch = (data: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: REQUEST_STARTED, payload: null });
  console.log("getBusBySearch daata :::: ", data);

  const res = await busSearch(data);
  if (res && res.status === 200) {
    console.log("response is..", res.data);
    dispatch({ type: USER_SEARCH_REQUEST_SUCCESS, payload: res.data });
  } else {
    alert("Train is not present");
    dispatch({ type: BUS_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getBus = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let page = { page: data };
    const response: any = await getAllBuses(page);

    if (response && response.status === 200) {
      dispatch({ type: BUS_REQUEST_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  } catch (error) {
    console.log(error);
  }
};
