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
      if (request.query?.action === "ADD_BUS") {
        return await addBus(request, response);
      } else if (request.query?.action === "GET_ALL_BUSES") {
        return await getAllBuses(request, response);
      } else if (request.query?.action === "UPDATE_BUS") {
        return await updateBus(request, response);
      } else if (request.query?.action === "DELETE_BUS") {
        return await deleteBus(request, response);
      } else if (request.query?.action === "SEARCH_BUS") {
        return await search(request, response);
      } else if (request.query?.action === "GET_BUS_BY_ID") {
        return await getBusById(request, response);
      } else if (request.query?.action === "BOOK_SEATS") {
        return await bookSeats(request, response);
      } else if (request.query?.action === "GET_BUS_NUMBER") {
        return await findByBusNumber(request, response);
      } else if (request.query?.action === "GET_BOOKS_SEATS_DATA_BY_ID") {
        return await getBookSeatsDataById(request, response);
      }

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + request.method });
  }
}

export async function addBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    // console.log("called api");

    const { fields, files } = await parseForm(request);

    const file = files?.imageUrl;

    // console.log("fields in add bus ", fields);
    // console.log("file  in add bus  ", file);

    let url = Array.isArray(file)
      ? file.map((f) => f.newFilename)
      : file.newFilename;
    fields.imageUrl = url;

    const buses = await db.collection("Bus Details");
    const res = await buses.insertOne(fields);

    return response.status(200).json({ data: res });
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

export async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("called search api");
  const { fields } = await parseForm(request);
  const { from, to } = fields;
  const buses = await db.collection("Bus Details");
  // const res = await buses.find({ from, to }).toArray();
  const res = await buses
    .find({
      $and: [
        {
          from: { $regex: from, $options: "i" },
        },
        {
          to: { $regex: to, $options: "i" },
        },
      ],
    })
    .toArray();
  return response.status(200).json({ data: res });
}

export async function updateBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
  const buses = await db.collection("Bus Details");
  const res = await buses.updateOne(
    { _id: new ObjectId(fields._id) },
    {
      $set: {
        busname: fields.busname,
        busnumber: fields.busnumber,
        from: fields.from,
        to: fields.to,
        arrivalTime: fields.arrivalTime,
        arrivalDate: fields.arrivalDate,
        pickUpPoint: fields.pickUpPoint,
        departureTime: fields.departureTime,
        seats: fields.seats,
        ticketprice: fields.ticketprice,
        operator: fields.operator,
        currentStatus: fields.currentStatus,
        busType: fields.busType,
        busstops: fields.busstops,
        noofstop: fields.noofstop,
        bookingseats: fields.bookingseats,
        travelagencyname: fields.travelagencyname,
        duration: fields.duration,
      },
    }
  );
  return response.status(200).json({ data: res });
}

export async function deleteBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
  const buses = await db.collection("Bus Details");
  const res = await buses.deleteOne({
    _id: new ObjectId(fields._id),
  });
  return response.status(200).json({ data: res });
}

export async function getAllBuses(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // console.log("api called....");

  const { fields } = await parseForm(request);
  // console.log("fields", fields);
  const page: number = parseInt(fields.page as string) || 1;
  // console.log("page Number", fields.page);
  const itemsPerPage: number = 3;

  try {
    const startIndex: number = (page - 1) * itemsPerPage;

    const endIndex: number = startIndex + itemsPerPage;

    const items = await db
      .collection("Bus Details")
      .find()
      .skip(startIndex)
      .limit(itemsPerPage)
      .toArray();

    const totalItems: number = await db
      .collection("Bus Details")
      .countDocuments();

    const totalPages: number = Math.ceil(totalItems / itemsPerPage);

    response.status(200).json({
      page,
      totalPages,
      totalItems,
      items,
    });
  } catch (error) {
    response.status(500).json({ message: "internal server error" });
  }
}

export async function getBusById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
  const bus = await db.collection("Bus Details");
  const res = await bus.findOne({ _id: new ObjectId(fields._id) });
  return response.status(200).json({ data: res });
}

export async function bookSeats(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
  const bookSeats = await db.collection("Bus_Book_Seats");
  const res = await bookSeats.insertOne(fields);
  return response.status(200).json({ data: res });
}

export async function getBusByName(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
  const { from, to } = fields;
  const buses = await db.collection("Bus Details");
  const res = await buses.find({ from, to }).toArray();
  return response.status(200).json({ data: res });
}

export async function findByBusNumber(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields } = await parseForm(request);
  const bus = await db.collection("Bus_Book_Seats");
  const res = await bus.findOne({ busNumber: fields.busNumber });
  // console.log("res:::::::::::::: in findByBusNumber", res);
  return response.status(200).json({ data: res ? res : "not available bus " });
}

export async function getBookSeatsDataById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("Called getBookSeatsDataBy Id");

  const { fields } = await parseForm(request);
  console.log("fields id in getBookSeatsDataBy Id", fields._id);

  const bus = await db.collection("Bus_Book_Seats");
  const res = await bus.findOne({ _id: new ObjectId(fields._id) });
  console.log("response in getBookSeatsDataById*************", res);
  return response.status(200).json({ data: res });
}
