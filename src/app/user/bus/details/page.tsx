"use client";

import UInput from "@/components/userComponents/UInput";
import React, { useState } from "react";
import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { seats } from "@/redux/action/seatBook";

import { PlusIcon } from "@heroicons/react/24/solid";
import BBButton from "@/app/components/BBButton";
import { BsArrowRight } from "react-icons/bs";
import UHeader from "@/components/userComponents/UHeader";
import UFooter from "@/components/userComponents/UFooter";
import UBannerFooter from "@/components/userComponents/UBannerFooter";

const ConfirmationPage = () => {
  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in Details page", userData);

  const router = useRouter();
  const [email, setEmail] = useState(userData?.data?.data?.email);
  const [mobileNumber, setMobileNumber] = useState(
    userData?.data?.data?.mobileNumber
  );
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [age, setAge] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Available");

  const [person, setPerson] = useState<any>([
    { fName: "", lName: "", age: "" },
  ]);
  const dispatch = useAppDispatch();

  const seatsBookData = useSelector((state: any) => state.seats.seats);
  let status = seatsBookData?.status;
  console.log("sts is::::::::", status);

  console.log("seatsBookData  in details page..", seatsBookData);

  // useEffect(() => {
  //   if (seatsBookData) {
  //     if (seatsBookData?.status === 200) {
  //       setTimeout(() => {
  //         router.push("/user/bus/Invoice");
  //         alert("Your Seats is Booked");
  //       }, 3000);
  //     }
  //   }
  // }, [seatsBookData]);

  const book_seats: any = useSelector((state: any) => state.seats.bookSeats);

  let data: any = [];
  data = book_seats?.b_Seats ? JSON.parse(book_seats?.b_Seats) : null;

  if (!data) return;

  let from = book_seats?.busDetails?.data.from;
  let to = book_seats?.busDetails?.data.to;
  let travelAgencyName = book_seats?.busDetails?.data.travelagencyname;
  let busType = book_seats?.busDetails?.data.busType;
  let departureTime = book_seats?.busDetails?.data.departureTime;
  let arrivalDate = book_seats?.busDetails?.data.arrivalDate;
  let busNumber = book_seats?.busDetails?.data.busnumber;
  let arrivalTime = book_seats?.busDetails?.data.arrivalTime;
  let noOfStops = book_seats?.busDetails?.data.noofstop;

  const handleClosemodal = () => {
    setShowModal(false);
  };

  let sum = 0;

  const totalPrice = () => {
    sum = data.reduce((sum: any, item: any) => sum + item.price, 0);
    return sum;
  };

  const onHandleChange = () => {
    data = {
      seats: JSON.stringify(data),
      travelAgencyName: travelAgencyName,
      busType: busType,
      from: from,
      to: to,
      arrivalDate: arrivalDate,
      bookingDate: new Date(),
      seatsPrice: totalPrice(),
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      email: email,
      busNumber: busNumber,

      // persons: [{ firstName, lastName, age }],
      person: JSON.stringify(person),
    };
    dispatch(seats(data));
    // .then((res: any) => {
    if (status === 200) {
      router.push("/user/bus/Invoice");
    }
    // });
  };

  const setFName = (index: number, value: any) => {
    let data = [...person];
    data[index].fName = value;
    setPerson(data);
  };
  const setLName = (index: number, value: any) => {
    let data = [...person];
    data[index].lName = value;
    setPerson(data);
  };
  const set_Age = (index: number, value: any) => {
    let data = [...person];
    data[index].age = value;
    setPerson(data);
  };

  const addMore = () => {
    let data = [...person];
    data.push({ fName: "", lName: "", age });
    setPerson(data);
  };

  const onSub = () => {
    let data = [...person];
    data.pop();
    setPerson(data);
  };

  return (
    <>
      <UHeader
        header="Bus - Detail Page"
        subHeader="Home > Bus > Bus Details Page"
      />
      <div className="container max-w-screen-xl mx-auto py-4 ">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white shadow-md rounded p-4">
            <h2 className="text-2xl text-[#0c2f54] ml-4">
              Confirm Bus Details
            </h2>
            <div className="card p-5">
              <div className="card-header">
                <div className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-1/4  bg-white">
                      <h5 className="text-lg font-medium text-[#0c2f54]">
                        {from ? from : "FROM"}
                      </h5>
                    </div>
                    <div className="w-1/4">
                      <h5 className="text-3xl   flex justify-center">
                        <BsArrowRight />
                      </h5>
                    </div>
                    <div className="w-2/3 ">
                      <h5 className="text-lg font-xl text-[#0c2f54] ">
                        {to ? to : "TO"}
                      </h5>
                    </div>

                    <div className="w-2/3 text-left pr-13">
                      <h3 className="text-[#413e3e]">{arrivalDate}</h3>
                    </div>

                    <div className="text-center">
                      <h5 className="inline-block bg-[#28a745] text-white px-3 py-0 mr-6 rounded-md">
                        Refundable
                      </h5>
                    </div>
                    <div className="text-center w-1/3 text-sm">
                      <a
                        className="text-center w-1/3 text-sm cursor-pointer  text-blue-500"
                        onClick={() => setShowModal(true)}
                      >
                        Fare Rules
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="border border-gray-200">
                  <div className="flex items-center mb-1 pb-2 ">
                    <div className="">
                      <div className="w-full ml-[6px]">
                        <h5 className="text-lg  mt-2">
                          {travelAgencyName
                            ? travelAgencyName
                            : "Ak Tour And Travles"}
                        </h5>
                        <span className="text-sm text-gray-500">
                          {busType ? busType : "Ac Sleeper"}
                        </span>
                      </div>
                    </div>
                    <div className="w-1/4 text-center">
                      <h5 className="text-xl">
                        {departureTime ? departureTime : "23:00"}
                      </h5>
                      <span className="text-sm text-gray-500">{from}</span>
                    </div>
                    <div className="w-1/4 text-center">
                      <h5 className="text-lg">18h 55m</h5>
                      <span className="text-sm text-gray-500">
                        {noOfStops ? noOfStops + " " + "Stops" : "12 Stops"}
                      </span>
                    </div>
                    <div className="w-1/4 text-center">
                      <h5 className="text-xl">
                        {" "}
                        {arrivalTime ? arrivalTime : "18:15"}{" "}
                      </h5>
                      <span className="text-sm text-gray-500">{to}</span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="w-full pl-2  mt-1 mb-2 text-sm"
                      style={{ display: "flex", columnGap: "5px" }}
                    >
                      <span className="font-medium pl-3 pb-5">
                        {" "}
                        Seat No({data.length}) :
                      </span>
                      <div className="flex flex-wrap"></div>
                      {data?.map((element: any) => (
                        <div className="bg-[#28a745] text-white p-[2px] rounded-md mb-4 w-7 text-center">
                          {element.seat_number}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="alert text-sm alert-info  my-4 bg-[#cff4fc] p-2 rounded-sm">
                  <span className=" bg-[#0dcaf0] p-[0px] rounded-sm text-white text-xs p-1">
                    NOTE:
                  </span>{" "}
                  This is a special fare given by the railway. Railway
                  cancellation charges do apply.
                </div>
                <h2 className="text-2xl  text-[#0c2f54] mb-4 mt-6">
                  Traveller Details -
                  <span className="text-lg">
                    <a
                      className="text-blue-700 mr-2"
                      onClick={() => router.push("/auth")}
                    >
                      Login
                    </a>
                    to book faster
                  </span>
                </h2>
                <p className="font-light">Contact Details</p>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                    <UInput
                      id="email"
                      type="email"
                      placeholder=" Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                    <UInput
                      id="phone"
                      type="text"
                      placeholder="Enter Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="alert text-sm alert-info text-[#0DCAF0] p-1 rounded-sm ">
                    Your booking details will be sent to this email address and
                    mobile number.
                  </div>
                </div>
                <p className="font-semibold">Passenger's Name</p>
                <div className="cursor-pointer w-fit flex ">
                  <div className="">Add More</div>
                  <div className="">
                    <PlusIcon className=" w-6" onClick={addMore} />
                  </div>
                </div>
                {person.map((element: any, index: any) => (
                  <div className="flex flex-wrap mb-4 gap-2">
                    <div className="w-full lg:w-[30%]  mb-3">
                      <UInput
                        id="passenger-name"
                        type="text"
                        placeholder="Enter First Name"
                        value={element.fName}
                        onChange={(e: any) => setFName(index, e.target.value)}
                      />
                    </div>
                    <div className="w-full lg:w-[30%] mb-3">
                      <UInput
                        id="passenger-name"
                        type="text"
                        placeholder="Enter Last Name"
                        value={element.lName}
                        onChange={(e) => setLName(index, e.target.value)}
                      />
                    </div>

                    <div className="w-full lg:w-[30%]  mb-3">
                      <UInput
                        id="passenger-age"
                        type="text"
                        placeholder="Age"
                        value={element.age}
                        onChange={(e) => set_Age(index, e.target.value)}
                      />
                    </div>

                    <div className="w-full lg:w-[5%] mb-3">
                      <BBButton
                        onClick={onSub}
                        className="w-full lg:w-fit "
                        label={"-"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="bg-white shadow-md rounded p-4">
            <h3 className="text-3xl mb-2">Fare Details</h3>
            <div className="space-y-2">
              <aside className="col-lg-4 mt-4 mt-lg-0">
                <div className="bg-white shadow-md rounded p-3">
                  <ul className="list-none">
                    <li className="mb-2">
                      Base Fare{" "}
                      <span className="float-right text-4 font-medium text-dark">
                        $980
                      </span>
                      <br />
                    </li>
                    <li className="mb-2">
                      Taxes &amp; Fees{" "}
                      <span className="float-right text-4 font-medium text-dark">
                        $215
                      </span>
                    </li>
                    <li className="mb-2">
                      Insurance{" "}
                      <span className="float-right text-4 font-medium text-dark">
                        $95
                      </span>
                    </li>
                  </ul>
                  <div className="text-dark bg-gray-100 text-4 font-semibold p-3">
                    Total Amount{" "}
                    <span className="float-right text-6">
                      {`$` + totalPrice()}
                    </span>
                  </div>
                  <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
                  <div className="flex items-center mb-4 ">
                    <UInput
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                      placeholder="Promo Code"
                      aria-label="Promo Code"
                      type="text"
                    />
                    <button
                      className="bg-blue-500 shadow-none ml-3 px-3 py-2 rounded-md"
                      type="submit"
                    >
                      APPLY
                    </button>
                  </div>
                  <ul className="list-disc pl-5 mb-5">
                    <li>
                      <div className="text-3 font-semibold">FLTOFFER</div>
                      Up to $500 Off on your booking. Hurry! Limited period
                      offer.{" "}
                      <a className="text-sm text-blue-500" href="">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <div className="text-3 font-semibold">HOTOFFER</div>
                      Up to $500 Off on your booking. Hurry! Limited period
                      offer.{" "}
                      <a className="text-sm text-blue-500" href="">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={() => onHandleChange()}
              >
                Proceed to Pay
              </button>
            </div>
          </aside>
        </section>

        {/* Fare Rules Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/2">
              <h2 className="text-2xl mb-4">Fare Rules</h2>
              <hr className="mb-4" />
              <div className="modal-body">
                <div className="h-[530px] overflow-y-scroll overflow-y-hidden">
                  <div>
                    <Tabs value={activeTab}>
                      <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-white p-0"
                        indicatorProps={{
                          className:
                            "bg-white border-b-2 border-blue-500 shadow-none rounded-none",
                        }}
                      >
                        <Tab
                          value="Available"
                          onClick={() => setActiveTab("Available")}
                        >
                          Baggage Details
                        </Tab>
                        <Tab
                          value="Cancellation"
                          onClick={() => setActiveTab("Cancellation")}
                        >
                          Cancellation Fee
                        </Tab>
                      </TabsHeader>
                      <TabsBody>
                        {activeTab === "Available" ? (
                          <>
                            <div className="my-3" id="myTabContent">
                              <div
                                className="tab-pane fade show active"
                                id="third"
                                role="tabpanel"
                                aria-labelledby="third-tab"
                              >
                                <div className="table-responsive">
                                  <table className="mx-auto border border-gray-300 w-[100%] ">
                                    <thead className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4 X">
                                      <tr>
                                        <th>&nbsp;</th>
                                        <td className="text-center">Cabin</td>
                                        <td className="text-center">
                                          Check-In
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody className="p-4 border-b border-blue-gray-50  ">
                                      <tr>
                                        <td>Adult</td>
                                        <td className="text-center">7 Kg</td>
                                        <td className="text-center">15 Kg</td>
                                      </tr>
                                      <tr>
                                        <td>Child</td>
                                        <td className="text-center">7 Kg</td>
                                        <td className="text-center">15 Kg</td>
                                      </tr>
                                      <tr>
                                        <td>Infant</td>
                                        <td className="text-center">0 Kg</td>
                                        <td className="text-center">0 Kg</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="my-3" id="myTabContent">
                            <div
                              className="tab-pane fade"
                              id="fourth"
                              role="tabpanel"
                              aria-labelledby="fourth-tab"
                            >
                              <table className="mx-auto border border-gray-300 w-[100%]">
                                <thead className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                  <tr>
                                    <th>&nbsp;</th>
                                    <td className="text-center">
                                      Per Passenger Fee
                                    </td>
                                  </tr>
                                </thead>
                                <tbody className="p-4 border-b border-blue-gray-50 ">
                                  <tr>
                                    <td>24 hrs - 365 days</td>
                                    <td className="text-center">$250 + $50</td>
                                  </tr>
                                  <tr>
                                    <td>2-24 hours</td>
                                    <td className="text-center">$350 + $50</td>
                                  </tr>
                                  <tr>
                                    <td>0-2 hours</td>
                                    <td className="text-center">$550 + $50</td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="font-semibold">
                                Terms &amp; Conditions
                              </p>
                              <ul className="list-disc pl-4">
                                <li>
                                  The penalty is subject to 4 hrs before
                                  departure. No Changes are allowed after that.
                                </li>
                                <li>
                                  The charges are per passenger per sector.
                                </li>
                                <li>
                                  Partial cancellation is not allowed on tickets
                                  booked under special discounted fares.
                                </li>
                                <li>
                                  In case of no-show or ticket not cancelled
                                  within the stipulated time, only statutory
                                  taxes are refundable subject to Service Fee.
                                </li>
                                <li>No Baggage Allowance for Infants</li>
                                <li>
                                  Airline penalty needs to be reconfirmed prior
                                  to any amendments or cancellation.
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </TabsBody>
                    </Tabs>
                  </div>
                  <div className="text-right mt-4">
                    <button
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                      onClick={handleClosemodal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white flex flex-col justify-center  mb-10">
        <UBannerFooter />
      </div>
      <div className="mb-10">
        <UFooter />
      </div>{" "}
    </>
  );
};

export default ConfirmationPage;
