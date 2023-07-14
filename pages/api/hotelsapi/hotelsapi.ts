import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";
import { ObjectId } from "mongodb";
import { parseForm } from "../../lib/parse-form";

let db: any = undefined;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  switch (request.method) {
    case "POST":
      if (request.query?.action === "addHotels") {
        return await addhotel(request, response);
      } else if (request.query?.action === "getHotels") {
        return await gethotel(request, response);
      } else if (request.query?.action === "updateHotels") {
        return await updatehotel(request, response);
      } else if (request.query?.action === "getHotelDetails") {
        return await getHotelById(request, response);
      } else if (request.query?.action === "deleteHotel") {
        return await deleteHotelById(request, response);
      } else if (request.query?.action === "searchByHotel") {
        return await serachByName(request, response);
      } else if (request.query?.action === "sort") {
        return await sortHotelBy(request, response);
      }else if (request.query?.action === "serachByCity"){
        return await serachByCityname(request ,response);
      }else if(request.query?.action === "bookHotel"){
        return await bookHotel(request,response);
      }else if(request.query?.action === "getBookedHotel"){
        return await hotelBookedData(request,response);
      }else if(request.query?.action === "getBookedHotelDtailsByOrderId"){
        return await getBookedHotelDtailsByOrderId(request,response);
      }else if(request.query?.action === "getAllHotels"){
        return await getAllHotels(request,response);
      }

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + request.method });
  }
}

export async function addhotel(
  request: NextApiRequest,
  response: NextApiResponse
) {

  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.insertOne(request.body);
  return response.status(200).json({ data: res });
}

export async function gethotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.find().toArray();
  return response.status(200).json({ data: res });
}

export async function getHotelById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.findOne({ _id: new ObjectId(request.body.id) });
  return response.status(200).json({ data: res });
}

export async function updatehotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  console.log("Data ", request.body.data);
  const res = await hotels.updateOne(
    { _id: new ObjectId(request.body.id) },
    {
      $set: request.body.data,
    }
  );
  return response.status(200).json({ data: res });
}

export async function deleteHotelById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.deleteOne({ _id: new ObjectId(request.body.id) });
  return response.status(200).json({ data: res });
}

export async function serachByName(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  let data = request.body.searchKey;
  // const res=await hotels.find().sort({hotelname:-1}).toArray()
  const res = await hotels
    .find({
      $or: [
        { hotelname: { $regex: data, $options: "i" } },
        { city: { $regex: data, $options: "i" } },
      ],
    })
    .toArray();

  response.status(200).json({ data: res });
}

export async function sortHotelBy(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  let { sortType } = request.body;
  let res = null;
  if (sortType === "PRICE_LOW") {
    res = await hotels.find().sort({ min_order_price: 1 }).toArray();
  } else if (sortType === "PRICE_HIGH") {
    res = await hotels.find().sort({ min_order_price: -1 }).toArray();
  } else {
    res = await hotels.find().toArray();
  }
  // const res=await hotels.find().sort({data:-1}).toArray()

  response.status(200).json({ data: res });
}


export async function serachByCityname(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  let data = request.body.searchKey;
  // const res=await hotels.find().sort({hotelname:-1}).toArray()
  const res = await hotels
    .find({
      $or: [
        { city: { $regex: data, $options: "i" } },
        { hotelname: { $regex: data, $options: "i" } },
       
      ],
    })
    .toArray();

  response.status(200).json({ data: res });
}

export async function bookHotel(
  request: NextApiRequest,
  response: NextApiResponse
){
  
  const hotels = await db.collection("Hotel_Booked_Details");
  try{
  const res = await hotels.insertOne(request.body);
  return response.status(200).json({ data: res, message:"Hotel Book Successfully" });
}catch(error){

  return response.status(500).json({ data: null,"message":"bad request" });
}
}


//history
export async function hotelBookedData(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotel_Booked_Details");
  const res = await hotels.find({ user_id: request.body.user_id}).toArray();
  return response.status(200).json({ data: res });
}


//booked hotel >>invoice
export async function getBookedHotelDtailsByOrderId(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log(request.body.hotel_booked_id)
  try{
  const hotels = await db.collection("Hotel_Booked_Details");
  const res = await hotels.findOne({ _id: new ObjectId(request.body.hotel_booked_id) })
  return response.status(200).json({ data: res });
  }
  catch(err){
    console.log("Error",err)
  }
}

export async function getAllHotels(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotel_Booked_Details");
  const res = await hotels.find().toArray();
  return response.status(200).json({ data: res });
}