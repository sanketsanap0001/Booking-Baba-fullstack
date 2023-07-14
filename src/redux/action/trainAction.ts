import React from "react";
import {
  REQUEST_STARTED,
  REQUEST_COMPLETED,
  TRAIN_REQUEST_SUCCESS,
  TRAIN_REQUEST_FAIL,
  TRAIN_BY_ID_REQUEST_SUCCESS,
  TRAIN_UPDATE_REQUEST_SUCCESS,
  USER_TRAIN_SEARCH_SUCCESS,
  TRAIN_TICKET_REQUEST_SUCCESS,
} from "../constant";
import { AppDispatch } from "../store";
import {
  TrainSearch,
  addtrainInfo,
  bookTrain,
  deleteTrain,
  getAllTrains,
  trainById,
  updateTrainInfo,
} from "@/service/services";

export const addTrain = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    const res = await addtrainInfo(data);
    console.log("addTrain data in trainAction:::::::::", res);
    if (res && res.status === 200) {
      dispatch({ type: TRAIN_UPDATE_REQUEST_SUCCESS, payload: res });
    } else {
      alert("Fail to add Train Or Train is already added.");
      dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    // console.log(error);
    throw error;
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getTrains = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let page = { page: data };
    const res = await getAllTrains(page);
    
    if (res && res.status === 200) {
      dispatch({ type: TRAIN_REQUEST_SUCCESS, payload: res.data });
    } else {
      alert("No Data Found...");
      dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const deleteTrainAction =
  (_id: any) => async (dispatch: AppDispatch) => {
    console.log("deleteTrainAction>>>>>>>>>>", _id);
    let data = { _id: _id };

    try {
      dispatch({ type: REQUEST_STARTED, payload: null });

      const res = await deleteTrain(data);
      if (res && res.status === 200) {
        console.log("response is..>>", res);
        dispatch({ type: TRAIN_UPDATE_REQUEST_SUCCESS, payload: res });
      } else {
        alert("Train Not Deleted.");
        dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
      }
    } catch (error) {
      console.log(error);       
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };

export const updateTrainAction =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: REQUEST_STARTED, payload: null });

      const res = await updateTrainInfo(data);
      if (res && res.status === 200) {
        console.log("update response is..", res);
        dispatch({ type: TRAIN_UPDATE_REQUEST_SUCCESS, payload: res.data });
      } else {
        alert("Train Not updated.");
        dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };

export const getTrainById = (id: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: REQUEST_STARTED, payload: null });
  let data = { _id: id };

  const res = await trainById(data);
  if (res && res.status === 200) {
    console.log("response is..", res);
    dispatch({ type: TRAIN_BY_ID_REQUEST_SUCCESS, payload: res.data });
  } else {
    alert("Train Not present");
    dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getTrainBySearch =
  (data: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: REQUEST_STARTED, payload: null });
    // console.log("hefhebfje",data)

    const res = await TrainSearch(data);
    if (res && res.status === 200) {
      console.log("response is..", res);
      dispatch({ type: USER_TRAIN_SEARCH_SUCCESS, payload: res.data });
    } else {
      alert("Train is not present");
      dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
    }
    dispatch({ type: REQUEST_COMPLETED, payload: null });
  };

export const trainTicket = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    const res = await bookTrain(data);
    if (res && res.status === 200) {
      console.log("addTrain data in trainAction:::::::::", res);
      dispatch({ type: TRAIN_TICKET_REQUEST_SUCCESS, payload: res.data });
    } else {
      alert("Fail to add Train Or Train is already added");
      dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};