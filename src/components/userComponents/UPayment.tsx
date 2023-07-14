"use client";
import BBButton from "@/app/components/BBButton";
import BBTypography from "@/app/components/BBTypography";
import Overlays from "@/components/userComponents/Overlays";
import UHeader from "@/components/userComponents/UHeader";
import UInput from "@/components/userComponents/UInput";
import React from "react";

const UPayment = () => (
  <div>
    <UHeader header="Payment" subHeader="Home > Payment" />

    <div>
      <div className="max-w-screen-xl mx-auto py-4 rounded container">
        <div className="bg-white shadow-md rounded">
          <div className="flex flex-row justify-between items-center p-4 py-2">
            <div className="">
              <h2 className=" flex m-0">
                <span className="flex items-center font-black text-blackbig text-base">
                  Total Payable Amount
                </span>
                <span className="text-tabchange text-[32px] ">$150</span>
              </h2>
            </div>
            <div className="">
              <p className="text-md-end pb-0 mb-0">
                Transaction ID: <span className="text-body">25246584</span>
              </p>
            </div>
          </div>
          <hr className="m-0" />
          <div className="p-4 py-3 ">
            <h3 className="text-2xl mb-5 text-headcolor">
              How would you like to pay?
            </h3>
            <div className="flex flex-row gap-5">
              <div className="w-[25%]">
                <h3 className="text-headcolor text-xl font-medium mb-4">
                  Credit/Debit Cards
                </h3>
                <div className="bg-gray-100 rounded p-4">
                  <h3 className="text-lg text-headcolor mb-3">Order Summary</h3>

                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Product 1</span>
                    <span className="text-gray-800">$19.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Product 2</span>
                    <span className="text-gray-800">$29.99</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="text-lg text-headcolor mb-3">Total</span>
                    <span className="text-lg text-headcolor mb-3 border border-b-headcolor">
                      $49.98
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="tab-content " id="myTabContentVertical">
                  <div
                    className="tab-pane fade active show"
                    id="firstTab"
                    role="tabpanel"
                    aria-labelledby="first-tab"
                  >
                    <div className="row">
                      <h3 className="text-headcolor text-xl font-medium mb-3">
                        Enter Card Details
                      </h3>
                      <form id="payment" method="post">
                        <div className="space-y-5">
                          <div className="col-12">
                            <BBTypography className="text-sm">
                              Enter Debit / Credit Card Number
                            </BBTypography>
                            <UInput
                              type="text"
                              className=""
                              id="cardNumber"
                              required
                              placeholder="Card Number"
                            />
                          </div>
                          <div className="flex justify-between gap-5">
                            <div className="w-full">
                              <div>
                                <BBTypography className="text-sm">
                                  Expiry Month
                                </BBTypography>

                                <select
                                  id="expiryMonth"
                                  className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
                                  required
                                >
                                  <option value="">Expiry Month</option>
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="1">April</option>
                                  <option value="1">May</option>
                                  <option value="1">June</option>
                                  <option value="1">July</option>
                                  <option value="1">August</option>
                                  <option value="1">September</option>
                                  <option value="1">October</option>
                                  <option value="1">November</option>
                                  <option value="1">December</option>
                                </select>
                              </div>
                            </div>
                            <div className="w-full">
                              <div>
                                <BBTypography className="text-sm">
                                  Expiry Year
                                </BBTypography>
                                <select
                                  id="expiryYear"
                                  className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
                                  required
                                >
                                  <option value="">Expiry Year</option>
                                  <option>2023</option>
                                  <option>2024</option>
                                  <option>2025</option>
                                  <option>2026</option>
                                  <option>2027</option>
                                  <option>2028</option>
                                  <option>2029</option>
                                  <option>2030</option>
                                  <option>2031</option>
                                  <option>2032</option>
                                  <option>2033</option>
                                  <option>2034</option>
                                  <option>2035</option>
                                  <option>2036</option>
                                  <option>2037</option>
                                  <option>2038</option>
                                  <option>2039</option>
                                  <option>2040</option>
                                  <option>2041</option>
                                  <option>2042</option>
                                  <option>2043</option>
                                  <option>2044</option>
                                  <option>2045</option>
                                  <option>2046</option>
                                  <option>2047</option>
                                  <option>2048</option>
                                  <option>2049</option>
                                  <option>2050</option>
                                </select>
                              </div>
                            </div>
                            <div className="w-full">
                              <BBTypography className="text-sm">
                                CVV
                              </BBTypography>
                              <UInput
                                type="text"
                                className="form-control"
                                data-bv-field="cvvnumber"
                                id="cvvNumber"
                                required
                                placeholder="CVV Number"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <BBTypography className="text-sm">
                              Card Holder Name
                            </BBTypography>
                            <UInput
                              type="text"
                              className="form-control"
                              data-bv-field="cardholdername"
                              id="cardHolderName"
                              required
                              placeholder="Card Holder Name"
                            />
                          </div>
                          <div className="col-12">
                            <BBTypography className="text-sm">
                              <span>
                                <input
                                  id="save-card"
                                  name="savecard"
                                  className=""
                                  type="checkbox"
                                />
                              </span>
                              <span className="p-1">Save my card Details.</span>
                            </BBTypography>
                          </div>
                          <div className="col-12 d-grid">
                            <BBButton
                              className="btn btn-primary"
                              // href="recharge-payment-success.html"
                            >
                              Proceed to Pay $135
                            </BBButton>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <div className="">
                  <h3 className="text-headcolor text-xl font-medium mb-3">
                    We Accept:
                  </h3>

                  <ul className="payments-types m-0 p-0 flex  space-x-1">
                    <li>
                      <Overlays title="Visa">
                        <a href="#" target="_blank">
                          <img
                            data-bs-toggle="tooltip"
                            src="data:image/png;base64,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"
                            alt="visa"
                            title=""
                            data-bs-original-title="Visa"
                            aria-label="Visa"
                            className="w-12 h-10"
                          />
                        </a>
                      </Overlays>
                    </li>
                    <li>
                      <Overlays title="Discover">
                        <a href="#" target="_blank">
                          <img
                            data-bs-toggle="tooltip"
                            src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                            alt="discover"
                            title=""
                            data-bs-original-title="Discover"
                            aria-label="Discover"
                            className="w-12 h-10"
                          />
                        </a>
                      </Overlays>
                    </li>
                    <li>
                      <Overlays title="PayPal">
                        <a href="#" target="_blank">
                          <img
                            data-bs-toggle="tooltip"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0hX4m2gdnPYvmJuY0v7l8sBWeP7aUMfdjQ&usqp=CAU"
                            alt="paypal"
                            title=""
                            data-bs-original-title="PayPal"
                            aria-label="PayPal"
                            className="w-12 h-10"
                          />
                        </a>
                      </Overlays>
                    </li>
                    <li>
                      <Overlays title="American Express">
                        <a href="#" target="_blank">
                          <img
                            data-bs-toggle="tooltip"
                            src="data:image/png;base64,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"
                            alt="american express"
                            title=""
                            data-bs-original-title="American Express"
                            aria-label="American Express"
                            className="w-12 h-10"
                          />
                        </a>
                      </Overlays>
                    </li>
                    <li>
                      <Overlays title="Discover">
                        <a href="#" target="_blank">
                          <img
                            data-bs-toggle="tooltip"
                            src="data:image/png;base64,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"
                            alt="discover"
                            title=""
                            data-bs-original-title="Discover"
                            aria-label="Discover"
                            className="w-12 h-10"
                          />
                        </a>
                      </Overlays>
                    </li>
                  </ul>

                  <div className="bg-gray-100 rounded p-4 mt-3 d-md-block">
                    <h3 className="text-lg text-headcolor mb-3">
                      We value your Privacy
                    </h3>
                    <p className="mb-3">
                      We will not sell or distribute your contact information.
                      Read our{" "}
                      <a href="#" className="text-tabchange">
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <hr className="mx-4" />
                    <h3 className="text-lg text-headcolor mb-3">
                      Billing Enquiries
                    </h3>
                    <p className="mb-3">
                      Do not hesitate to reach our{" "}
                      <a href="#" className="text-tabchange">
                        support team
                      </a>{" "}
                      if you have any queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UPayment;
