"use client";
import React from "react";

export default function page() {
  return (
    <div className="bg-white px-60">
      <div className="container  mx-auto p-4">
        <div className=" p-4 ">
          <div className="container mx-auto p-4">
            <div className="font-bold text-2xl text-[gray]">
              <p>Booking Baba</p>
            </div>
            <div className="text-right">
              <h4 className=" font-bold text-blue-900 text-2xl">Invoice</h4>
              <p className=" pb-3 text-[#535b61] text-base">
                Invoice Number - 16835
              </p>
              <hr />
            </div>

            <p className="text-secondary text-center mb-2 pt-3 text-[#8e9a9d] text-xs">
              This e-ticket will only be valid along with an ID proof in
              original. If found travelling without ID proof, passengers will be
              treated as without a ticket and charged as per extant Railway
              rules.
            </p>

            <h4 className="font-bold mb-2 text-[#0c2f54] text-lg">
              Journey Details
            </h4>
            <div className="mb-2">
              <table className="border-collapse w-full ">
                <thead>
                  <tr className="border border-gray-500 bg-[#efefef]">
                    <th>
                      <span className="font-bold text-[#535b61] text-sm">
                        Reference ID :
                      </span>
                      <span className="text-[#212529] text-sm font-normal">
                        {" "}
                        OUJICE{" "}
                      </span>
                    </th>

                    <th colSpan={4} className="text-end pr-5">
                      <span className="text-[#535b61] text-sm">
                        Date of Booking :
                      </span>
                      <span className="text-[#212529] text-sm font-normal">
                        {" "}
                        05 Aug, 2019 at 06:50 PM{" "}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-500 ">
                    <td className=" font-bold py-2 pl-4 text-[#535b61] text-sm">
                      Transaction ID
                    </td>
                    <td className="text-[#212529] text-sm">3912912704</td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      PNR
                    </td>
                    <td className="text-[#212529] text-sm">2213335256</td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="font-bold py-2 pl-4 text-[#535b61] text-sm">
                      Train No &amp; Name
                    </td>
                    <td className="text-[#212529] text-sm">
                      4211 / Intercity Exp.
                    </td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      Date of Journey
                    </td>
                    <td className="text-[#212529] text-sm">10 Aug, 2019</td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="font-bold py-2 pl-4 text-[#535b61] text-sm">
                      Class
                    </td>
                    <td className="text-[#212529] text-sm">Ac Chair</td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      Date of Boarding
                    </td>
                    <td className="text-[#212529] text-sm">10 Aug, 2019</td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="font-bold py-2 pl-4 text-[#535b61] text-sm">
                      From
                    </td>
                    <td className="text-[#212529] text-sm">Delhi</td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      To
                    </td>
                    <td className="text-[#212529] text-sm">Ahmedabad</td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="font-bold py-2 pl-4 text-[#535b61] text-sm">
                      Departure
                    </td>
                    <td className="text-[#212529] text-sm">06:00 AM</td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      Total Fare
                    </td>
                    <td className="text-[#212529] text-sm">$1195.00</td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="font-bold py-2 pl-4 text-[#535b61] text-sm">
                      Distance
                    </td>
                    <td className="text-[#212529] text-sm">946 km</td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      Quota
                    </td>
                    <td className="text-[#212529] text-sm">General (GN)</td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="font-bold py-2 pl-4 text-[#535b61] text-sm">
                      Adult
                    </td>
                    <td className="text-[#212529] text-sm">1</td>
                    <td className="font-bold py-2 text-[#535b61] text-sm">
                      Child
                    </td>
                    <td className="text-[#212529] text-sm">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-[#0c2f54] text-lg font-bold mb-2 pt-3">
              Passenger Details
            </h4>
            <div className="mb-2">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border border-gray-500 text-[#535b61] text-sm bg-[#efefef]">
                    <th className="py-1">S. NO.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Seat No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-500 text-center text-[#535b61]">
                    <td className="py-1">1</td>
                    <td>Neil Patel</td>
                    <td>31</td>
                    <td>Male</td>
                    <td>C2, 25</td>
                    <td>Confirm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-2 pt-5">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border border-gray-500">
                    <td className="w-1/3 py-2 pl-1 text-[#535b61]">
                      <span className="font-bold pl-3 text-[#535b61] text-sm">
                        Agent :
                      </span>{" "}
                      Booking Baba Inc
                    </td>
                    <td className="w-1/3 py-1 text-[#535b61]">
                      <span className="font-bold text-[#535b61] text-sm">
                        Phone No :
                      </span>{" "}
                      9898989898
                    </td>
                    <td className="w-1/3 py-1 pl-2 text-[#535b61]">
                      <span className="font-bold text-[#535b61] text-sm">
                        Email Id :
                      </span>{" "}
                      bookingbaba@.gmail.com
                    </td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td colSpan={3} className="py-1 text-[#535b61] text-sm">
                      <span className="font-bold pl-3 ">Address :</span> 4th
                      Floor, Plot No.22, Above Public Park, 145 Murphy Canyon
                      Rd, Suite 100-18, San Diego CA 2028.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold mb-2 pt-3 text-[#0c2f54] text-lg">
              Fare Details
            </h4>
            <div className="mb-2 ">
              <table className="w-full border-spacing-1 ">
                <tbody>
                  <tr className=" text-end border border-gray-500">
                    <td className="w-3/4 font-bold py-2 text-[#535b61] text-sm">
                      Basic Fare :
                    </td>
                    <td className="w-1/4 text-end text-[#535b61] pr-2">
                      $980.00
                    </td>
                  </tr>
                  <tr className="border border-gray-500">
                    <td className="w-3/4 font-bold text-end py-2 text-[#535b61] text-sm">
                      Reservation Charge :
                    </td>
                    <td className="w-1/4 text-end text-[#535b61] pr-2">$215</td>
                  </tr>
                  <tr className="border border-gray-500 ">
                    <td className="w-3/4 font-bold text-end py-2 text-[#535b61] text-sm">
                      Total Amount :
                    </td>
                    <td className="w-1/4 text-end py-2 text-[#535b61] pr-2">
                      $1195.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold mb-2 pt-3 text-[#0c2f54] text-lg">
              Important Instructions
            </h4>
            <ul className=" list-disc pl-6 mb-2 font-sans text-sm text-[#535b61]">
              <li className="pb-1">
                One of the passengers in an e-ticket should carry proof of
                identification during the train journey.
              </li>
              <li className="pb-1">
                The input for the proof of identity in case of
                cancellation/partial cancellation is also not required now.
              </li>
              <li className="pb-3">
                The passenger should also carry the Electronic Reservation Slip
                (ERS) during the train journey failing which a penalty of $10
                will be charged by the TTE/Conductor Guard.
              </li>
            </ul>

            <hr />

            <p className="text-center py-3">
              <span className="text-[#151616] font-bold text-lg">
                Booking Baba
              </span>
              <br />
              <span className="text-[#151616]  text-sm">
                4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd,
                <br />
                Suite 100-18, San Diego CA 2028.
              </span>
            </p>

            <hr />

            <p className="text-center text-secondary pt-2 text-sm">
              NOTE: This is a computer-generated receipt and does not require a
              physical signature.
            </p>

            <div className="text-center pt-5">
              <div className="btn-group btn-group-sm">
                <button className="btn btn-light border text-black-50 shadow-none text-[#151616]">
                  <a className="fa fa-print" href="javascript:window.print()">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                      />
                    </svg> */}
                    Print
                  </a>
                </button>

                <a
                  href=""
                  className="btn btn-light border text-black-50 shadow-none"
                >
                  <a className="fa fa-download"></a> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
