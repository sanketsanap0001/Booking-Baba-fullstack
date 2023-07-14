"use client";
import UHeader from "@/components/userComponents/UHeader";
import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import UInput from "@/components/userComponents/UInput";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/solid";
import BBButton from "@/app/components/BBButton";
import { useRouter } from "next/navigation";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const trainData: any = useSelector((state: any) => state.train.getTrainById);
  console.log("Train data is in confirm page ..", trainData);
  const [activeTab, setActiveTab] = React.useState("Available");

  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("logindetails in confirm page ..", userData);

  const [email, setEmail] = useState(userData?.data?.data?.email);
  const [mobileNumber, setMobileNumber] = useState(
    userData?.data?.data?.mobileNumber
  );

  const [age, setAge] = useState("");

  const [person, setPerson] = useState<any>([
    { fName: "", lName: "", age: "" },
  ]);

  const handleClosemodal = () => {
    setShowModal(false);
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

  const paymentProceed = () => {};

  return (
    <>
      <UHeader
        header="Train - Detail Page"
        subHeader="Home > Train > Train Details Page"
      />
      <div className="container mx-auto px-24 p-5 font-Poppins">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white shadow-md rounded p-4">
            <h2 className="text-2xl text-[#0c2f54] ml-4">
              Confirm Trains Details
            </h2>
            <div className="card p-5">
              <div className="card-header">
                <div className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-1/4  bg-white">
                      <h5 className=" ml-3 text-lg font-medium text-[#0c2f54]">
                        {trainData?.data?.from_Stn}
                      </h5>
                    </div>
                    <div className="w-1/4">
                      <h5 className="text-3xl   flex justify-center">
                        <BsArrowRight />
                      </h5>
                    </div>
                    <div className="w-2/3 ">
                      <h5 className="text-lg font-xl text-[#0c2f54] ">
                        {trainData?.data?.to_Stn}
                      </h5>
                    </div>

                    <div className="w-2/3 text-left pr-13">
                      <h3 className="text-[#413e3e]">
                        {" "}
                        {trainData?.data?.depDate}
                      </h3>
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
                  <div className="mt-3 flex items-center mb-1 pb-2 ">
                    <div>
                      <div className="w-full ml-[6px] text-center">
                        <h5 className="ml-3 text-lg  ">
                          {trainData?.data?.trainName}
                        </h5>
                        <span className="ml-3 text-sm text-gray-500">
                          {trainData?.data?.trainNo}
                        </span>
                      </div>
                    </div>

                    <div className="w-1/3 text-center">
                      <h5 className="text-xl">{trainData?.data?.depTime}</h5>
                      <span className="text-sm text-gray-500">
                        {trainData?.data?.from_Stn}
                      </span>
                      <h5 className="text-sm text-gray-500">
                        {trainData?.data?.depDate}
                      </h5>
                    </div>

                    <div className="w-1/3 text-center">
                      <h5 className="text-lg">{trainData?.data?.duration}</h5>
                      <span className="text-sm text-gray-500">
                        {trainData?.data?.stops} Stops
                      </span>
                    </div>
                    <div className="w-1/3 text-center">
                      <h5 className="text-xl">
                        {" "}
                        {trainData?.data?.arrivalTime}
                      </h5>
                      <span className="text-sm text-gray-500">
                        {trainData?.data?.to_Stn}
                      </span>
                      <h5 className="text-sm text-gray-500">
                        {trainData?.data?.arrDate}
                      </h5>
                    </div>
                  </div>

                  <div className="w-full ml-4 pb-3 text-sm">
                    <h5>
                      Class :{" "}
                      <span className="bg-[#0dcaf0] p-1 text-white rounded">
                        {trainData?.data?.classType}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="alert text-sm alert-info  my-4 bg-[#cff4fc] p-4 rounded-sm">
                  <span className=" bg-[#0dcaf0] p-[0px] rounded-sm text-white text-xs p-1">
                    NOTE:
                  </span>{" "}
                  This is a special fare given by the railway. Railway
                  cancellation charges do apply.
                </div>
                <h2 className="text-2xl text-[#0c2f54] mb-4 mt-6">
                  Traveller Details :
                  <span className="text-lg">
                    <a
                      className="text-blue-700 mr-2 pl-2"
                      onClick={() => router.push("/auth")}
                    >
                      Login
                    </a>
                    to book faster
                  </span>
                </h2>
                <p className="font-bold text-[#535b61] mb-2">Contact Details</p>
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
                      placeholder="Enter Mobile Details"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="alert text-sm alert-info text-[#0dcaf0]  my-4  p-2 rounded-sm">
                    Your booking details will be sent to this email address and
                    mobile number.
                  </div>
                </div>
                <p className="font-bold text-[#535b61] mb-2">Adult 1</p>
                <div className="cursor-pointer w-fit flex ">
                  <div className="mb-1 text-sm">Add More</div>
                  <div className="">
                    <PlusIcon className=" w-5" onClick={addMore} />
                  </div>
                </div>
                {person.map((element: any, index: any) => (
                  <div className="flex flex-wrap mb-0 ">
                    <div className="w-full sm:w-[30%] sm:pr-2 mb-3">
                      <UInput
                        id="passenger-name"
                        type="text"
                        placeholder="Enter First Name"
                        value={element.fName}
                        onChange={(e: any) => setFName(index, e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-[30%] sm:pr-2 mb-3">
                      <UInput
                        id="passenger-name"
                        type="text"
                        placeholder="Enter Last Name"
                        value={element.lName}
                        onChange={(e) => setLName(index, e.target.value)}
                      />
                    </div>

                    <div className="w-full sm:w-[30%] sm:pr-2 mb-3">
                      <UInput
                        id="passenger-age"
                        type="text"
                        placeholder="Age"
                        value={element.age}
                        onChange={(e) => set_Age(index, e.target.value)}
                      />
                    </div>

                    <div className="w-full sm:w-[10%] sm:pr-2 ">
                      <BBButton onClick={onSub} className="w-fit" label={"-"} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl mb-2 text-[#0c2f54] font-bold">
              Fare Details
            </h3>
            <div className="space-y-2">
              <aside className="col-lg-4 mt-4 mt-lg-0">
                <div className="bg-white shadow-md rounded p-3">
                  <ul className="list-none text-sm">
                    <li className="mb-2">
                      Base Fare{" "}
                      <span className="float-right text-4 font-medium text-dark">
                        $980
                      </span>
                      <br />
                      <small className="text-muted text-[12px]">
                        Adult: 1, Child: 0, Infant: 0
                      </small>
                    </li>
                    <li className="mb-2">
                      Taxes &amp; Fees{" "}
                      <span className="float-right text-4 font-medium text-dark">
                        $215
                      </span>
                    </li>
                    <li className="mb-2">
                      Insurance
                      <span className="float-right text-4 font-medium text-dark">
                        $95
                      </span>
                    </li>
                  </ul>
                  <div className="text-dark bg-gray-100 text-4 font-semibold p-3">
                    Total Amount{" "}
                    <span className="float-right text-6">$1290</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 mt-4 text-[#0c2f54]">
                    Promo Code
                  </h3>
                  <div className="flex items-center mb-4">
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                      placeholder="Promo Code"
                      aria-label="Promo Code"
                      type="text"
                    />
                    <button
                      className="bg-blue-500 text-white shadow-none ml-3 px-3 py-2 rounded-md"
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
                        Terms &amp; Conditions 1{" "}
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
                onClick={() => paymentProceed()}
              >
                Proceed to Pay
              </button>
            </div>
          </aside>
        </section>

        {/* Fare Rules Modal */}
        {showModal && (
          <div className="inset-0 fixed bg-gray-500 bg-opacity-50">
            <div className="  flex h-fit justify-center ">
              <div className="bg-white p-4 rounded shadow-lg w-1/2 mt-20">
                <div className="modal-body">
                  <div className="h-fit overflow-y-scroll overflow-y-hidden">
                    <div>
                      <h2 className="text-2xl  mb-2">Fare Rules</h2>

                      <hr className="mb-4" />
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
                                <div className="table-responsive">
                                  <table className="mx-auto border border-gray-300 w-[100%] ">
                                    <thead className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4 X">
                                      <tr>
                                        <td className="text-center">
                                          Passenger
                                        </td>
                                        <td className="text-center">Cabin</td>
                                        <td className="text-center">
                                          Check-In
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody className="p-4 border-b border-blue-gray-50  ">
                                      <tr>
                                        <td className="text-center">Adult</td>
                                        <td className="text-center">7 Kg</td>
                                        <td className="text-center">15 Kg</td>
                                      </tr>
                                      <tr>
                                        <td className="text-center">Child</td>
                                        <td className="text-center">7 Kg</td>
                                        <td className="text-center">15 Kg</td>
                                      </tr>
                                      <tr>
                                        <td className="text-center">Infant</td>
                                        <td className="text-center">0 Kg</td>
                                        <td className="text-center">0 Kg</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="my-3" id="myTabContent">
                              <table className="mx-auto border border-gray-300 w-[100%]">
                                <thead className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                  <tr>
                                    <td className="text-center">Time</td>
                                    <td className="text-center">
                                      Per Passenger Fee
                                    </td>
                                  </tr>
                                </thead>
                                <tbody className="p-4 border-b border-blue-gray-50 ">
                                  <tr>
                                    <td className="text-center">
                                      24 hrs - 365 days
                                    </td>
                                    <td className="text-center">$250 + $50</td>
                                  </tr>
                                  <tr>
                                    <td className="text-center">2-24 hours</td>
                                    <td className="text-center">$350 + $50</td>
                                  </tr>
                                  <tr>
                                    <td className="text-center">0-2 hours</td>
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
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmationPage;
