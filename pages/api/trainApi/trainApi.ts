import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";
import { ObjectId } from "mongodb";
import { FormidableError, parseForm } from "../../lib/parse-form";

let db: any = undefined;
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  switch (request.method) {
    case "POST":
      if (request.query?.action === "ADD_TRAIN") {
        return await addTrain(request, response);
      } else if (request.query?.action === "UPDATE_TRAIN") {
        return await updateTrain(request, response);
      } else if (request.query?.action === "DELETE_TRAIN") {
        return await deleteTrain(request, response);
      } else if (request.query?.action === "GET_TRAINS") {
        return await getTrains(request, response);
      } else if (request.query?.action === "GET_TRAIN_BY_ID") {
        return await getTrainById(request, response);
      } else if (request.query?.action === "SEARCH_TRAINS") {
        return await searchTrains(request, response);
      } else if (request.query?.action === "BOOK_TRAIN_TICKET") {
        return await bookTrainTicket(request, response);
      } else if (request.query?.action === "GET_ALL_TRAIN_TICKET") {
        return await getAllTrainTicket(request, response);
      }

    case "GET":
      if (request.query?.action === "GETFILE") {
        return await getFile(request, response);
      }

    case "GET":
      if (request.query?.action === "GETFILE") {
        return await getFile(request, response);
      }

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + request.method });
  }
}

export async function addTrain(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { fields, files } = await parseForm(request);
    const file = files?.imageUrl;
    let url = Array.isArray(file)
      ? file.map((f) => f.newFilename)
      : file.newFilename;
    fields.imageUrl = url;
    const trains = await db.collection("Train Details");
    const res = await trains.insertOne(fields);

    return response.status(200).json({ data: res, error: null });
  } catch (e) {
    if (e instanceof FormidableError) {
      return response
        .status(e.httpCode || 400)
        .json({ data: null, error: e.message });
    } else {
      console.error(e);
      return response
        .status(500)
        .json({ data: null, error: "Internal Server Error" });
    }
  }
}

export async function updateTrain(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
 
  console.log(" update train api Id is ", fields._id);

  const buses = await db.collection("Train Details");
  const res = await buses.updateOne(
    { _id: new ObjectId(fields._id) },
    {
      $set: {
        trainNo: fields.trainNo,
        trainName: fields.trainName,
        from_Stn: fields.from_Stn,
        to_Stn: fields.to_Stn,
        depDate: fields.depDate,
        arrDate: fields.arrDate,
        distance: fields.distance,
        depTime: fields.depTime,
        arrivalTime: fields.arrivalTime,
        fare: fields.fare,
        seats: fields.seats,
        coach: fields.coach,
        duration: fields.duration,
        classType: fields.classType,
        trainType: fields.trainType,
        operationDays: fields.operationDays,
        trainRoute: fields.trainRoute,
        trainDesc: fields.trainDesc,
        // imageUrl: fields.imageUrl,
      },
    }
  );
  return response.status(200).json({ data: res });
}

export async function deleteTrain(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("called api");
  const trains = await db.collection("Train Details");
  let { fields } = await parseForm(request);

  const res = await trains.deleteOne({
    _id: new ObjectId(fields._id),
  });

  console.log("response delete train..>>>", res);

  return response.status(200).json({ data: res });
}

export async function getTrains(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { fields } = await parseForm(request);
  console.log("page", fields.page);
  const page: number = parseInt(fields.page as string) || 1;
  console.log("page Number", request);
  const itemsPerPage: number = 3;

  try {
    const startIndex: number = (page - 1) * itemsPerPage;

    const endIndex: number = startIndex + itemsPerPage;

    const items = await db
      .collection("Train Details")
      .find()
      .skip(startIndex)
      .limit(itemsPerPage)
      .toArray();

    const totalItems: number = await db
      .collection("Train Details")
      .countDocuments();

    const totalPages: number = Math.ceil(totalItems / itemsPerPage);

    response.status(200).json({
      page,
      totalPages,
      totalItems,
      items,
    });
  } catch (error) {
    console.log("error fetching data from mongodb", error);
    response.status(500).json({ message: "internal server error" });
  }
}

export async function getTrainById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { fields } = await parseForm(request);

  console.log(" fields.....>>>", fields);
  const trains = await db.collection("Train Details");

  const res = await trains.findOne({ _id: new ObjectId(fields._id) });
  return response.status(200).json({ data: res });
}

export async function searchTrains(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { fields } = await parseForm(request);
  const trains = await db.collection("Train Details");
  const res = await trains
    .find({
      $and: [
        {
          from_Stn: { $regex: fields.from_Stn, $options: "i" },
        },
        {
          to_Stn: { $regex: fields.to_Stn, $options: "i" },
        },
      ],
    })
    .toArray();
  return response.status(200).json({ data: res });
}

export async function bookTrainTicket(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { fields } = await parseForm(request);
  const trains = await db.collection("Train Ticket");
  const res = await trains.insertOne(fields);
  return response.status(200).json({ data: res });
}

export async function getAllTrainTicket(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Ticket");
  const res = await trains.find().toArray();
  return response.status(200).json({ data: res });
}

export async function getFile(
  request: NextApiRequest,
  response: NextApiResponse
) {}
