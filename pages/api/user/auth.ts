import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";
import { ObjectId } from "mongodb";

let db: any = undefined;

const USER_COLLECTION = "users";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  switch (request.method) {
    case "POST":
      if (request.query?.action === "SIGNUP") {
        return await createUser(request, response);
      } else if (request.query?.action === "LOGIN") {
        return await login(request, response);
      } else if (request.query?.action === "GET_ALL_USERS") {
        return await getAllUsers(request, response);
      } else if (request.query?.action === "GET_USER") {
        return await getUser(request, response);
      } else if (request.query?.action === "DELETE_USER") {
        return await deleteUser(request, response);
      } else if (request.query?.action === "RESET_PWD") {
        return await reset(request, response);
      }

    case "updatepassword":
      return await updatePwd(request, response);

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + request.method });
  }
}

export async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);

  const checkDetails = await user.findOne({
    $or: [
      {
        email: request.body.email,
      },
      {
        mobileNumber: request.body.mobileNumber,
      },
    ],
  });
  if (checkDetails) {
    return response
      .status(400)
      .json({ data: "Email and mobile number Already Exists.." });
  } else {
    const res = await user.insertOne(request.body);
    return response.status(200).json({ data: res });
  }
}

export async function getUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);
  const res = await user.findOne({ firstName: request.body.firstName });
  return response.status(200).json({ data: res });
}

export async function getAllUsers(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);
  const res = await user.find({}).toArray();
  return response.status(200).json({ data: res });
}

export async function deleteUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);
  const res = await user.deleteOne({ _id: new ObjectId(request.body.id) });
  return response.status(200).json({ data: res });
}

export async function login(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("datta", {
    email: request.body.email,
    password: request.body.password,
  });
  const login = await db.collection(USER_COLLECTION);
  const res = await login.findOne({
    email: request.body.email,
    password: request.body.password,
  });
  console.log(":::::::::::::::::::>", res);

  if (res === null) {
    return response.status(401).json({
      data: "Email id is not registered. Please Sign up Or Password Is Incorrect.",
    });
  } else {
    console.log("res in auth.ts", res);
    return response.status(200).json({ data: res });
  }
}

export async function reset(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("data", {
    email: request.body.email,
  });
  const reset = await db.collection(USER_COLLECTION);
  const res = await reset.findOne({
    email: request.body.email,
  });

  console.log(res);
  if (res === null) {
    return response
      .status(401)
      .json({ data: "Email id is not registered. Please Sign up." });
  } else {
    console.log("res in auth.ts", res);
    return response.status(200).json({ data: res });
  }
}

export async function updatePwd(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const pwdupdate = await db.collection(USER_COLLECTION);
  const res = await pwdupdate.updateOne(
    { _id: new ObjectId(request.body._id) },
    {
      // $set: request.body.data,
      $set: {
        password: request.body.password,
      },
    }
  );
  console.log("ressssss ", res);
  console.log("ressssss id ", request.body);
  return response.status(200).json({ data: res });
}
