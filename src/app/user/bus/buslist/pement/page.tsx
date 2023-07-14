"use client";
import React from "react";
import { ImCheckmark2 } from "react-icons/im";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { Stepper, Step, Button } from "@material-tailwind/react";

const RechargeSuccess: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className=" px-60">
      <div className="row my-5">
        <div className="">
          <div className=" flex justify-between items-center ">
            <div className="step-name ">Order</div>
            <div className="step-name ">Summary</div>
            <div className="step-name ">Payment</div>
            <div className="step-name">Done</div>
          </div>
          <div className=" content-start">
            <Stepper
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              className="text-green"
              activeLineClassName="bg-[green]"
            >
              <Step onClick={() => setActiveStep(0)}>
                <div className="bg-white h-full w-full rounded-full flex justify-center items-center border-2 border-[#28a745]">
                  <ImCheckmark2 className="h-5 w-5 text-[#28a745] " />
                </div>
              </Step>
              <Step onClick={() => setActiveStep(1)}>
                <div className="bg-white h-full w-full rounded-full flex justify-center items-center border-2 border-[#28a745]">
                  <ImCheckmark2 className="h-5 w-5 text-[#28a745]" />
                </div>
              </Step>
              <Step onClick={() => setActiveStep(2)}>
                <div className="bg-white h-full w-full rounded-full flex justify-center items-center border-2 border-[#28a745]">
                  <ImCheckmark2 className="h-5 w-5 text-[#28a745]" />
                </div>
              </Step>
              <Step onClick={() => setActiveStep(3)}>
                <div className="bg-white h-full w-full rounded-full flex justify-center items-center border-2 border-[#28a745]">
                  <ImCheckmark2 className="h-5 w-5 text-[#28a745]" />
                </div>
              </Step>
            </Stepper>
            {/* <div className="mt-16 flex justify-between">
                  <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                  </Button>
                  <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                  </Button>
                </div> */}
          </div>
        </div>
        <div className="grid text-center mt-5 gap-3">
          <div className=" mx-auto">
            <ImCheckmark2 className="h-16 w-16  text-white bg-[#28a745] rounded-full  p-4" />
          </div>
          <div className="text-2xl font-bold">Payment Successful</div>
          <div className="text-xl pb-7">
            We are processing the same and you will be notified via email.
          </div>
        </div>
        <div className="bg-white mx-52 text-center px-5">
          <div className=" shadow-sm rounded p-4 p-lg-5 mb-4">
            <div className="flex justify-between">
              <div className="col-sm font-normal">Transactions ID</div>
              <div className="col-sm font-extralight">PHDF173076359</div>
            </div>
            {/* <div className=" shadow-sm rounded p-4 p-lg-5 mb-4"> */}
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Date</div>
              <div className="col-sm text-sm-end fw-600">06-Feb-2019</div>
            </div>{" "}
            <hr />
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Mode of Payment</div>
              <div className="col-sm text-sm-end fw-600">Credit Card</div>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Transaction Status</div>
              <div className="col-sm text-sm-end text-[#48eb48] fw-600 text-success">
                Success
              </div>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Customer Name</div>
              <div className="col-sm text-sm-end fw-600">Johne Cary</div>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Mobile No</div>
              <div className="col-sm text-sm-end fw-600">(+91) 9898989898</div>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Subject</div>
              <div className="col-sm text-sm-end fw-600">Mobile Recharge</div>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <div className="col-sm text-muted">Payment Amount</div>
              <div className="col-sm text-sm-end text-6 fw-500">$135</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex">
            <span className="text-5 me-2">
              <i className="far fa-file-pdf"></i>
            </span>
            Save as PDF
          </a>
          <a
            href=""
            className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"
          >
            <span className="text-5 me-2">
              <i className="fas fa-print"></i>
            </span>
            Print Receipt
          </a>

          <a
            href="#"
            className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"
          >
            <span className="text-5 me-2">
              <i className="far fa-envelope"></i>
            </span>
            Email Receipt
          </a>
          {/* <p className="mt-4 mb-0">
            <a href="#" className="btn btn-primary">
              Make another Recharge
            </a>
          </p> */}
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-64 py-4">
              Make another Recharge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeSuccess;
