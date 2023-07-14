"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  deleteBusAction,
  getBus,
  updateBusAction,
} from "@/redux/action/busaction";
import { Pagination } from "react-bootstrap";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

export default function Bus() {
  const busData: any = useSelector((state: any) => state.bus.busDetails);
  console.log("bus data is ..==>>>>", busData);
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState<any>(1);
  const [page, setPage] = useState<any>(1);
  const [totalItems, setTotalItems] = useState<any>();
  const [items, setItems] = useState<any>([]);
  const [totalPages, setTotalPages] = useState<any>();

  console.log(" using usestate bus data is ..", busData);

  useEffect(() => {
    getAllBuses();
  }, [counter, page]);

  useEffect(() => {
    if (busData) {
      const { page, totalItems, totalPages, items } = busData;
      setPage(page);
      setTotalItems(totalItems);
      setTotalPages(totalPages);
      setItems(items);
    }
  }, [busData]);
  console.log("totalPages => ", items);

  const getAllBuses = () => {
    dispatch(getBus(page));
  };

  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };

  const deleteBus = (id: string) => {
    dispatch(deleteBusAction(id)).then(() => {
      setCounter(counter + 1);
      getAllBuses();
    });
  };

  const updateBus = (id: string) => {
    router.push("/bus/updatebus/" + id);
    setCounter(counter + 1);
    getAllBuses();
  };
  const addBus = () => {
    router.push("/bus/add");
    setCounter(counter + 1);
    getAllBuses();
  };

  const router = useRouter();
  return (
    <div className="tracking-wide	">
      <Card className="w-full mt-[0.5%]">
        <div className="flex p-1 px-2 items-center justify-between rounded-none">
          <div className="flex items-center justify-center">
            <Typography
              className="px-4 font-castoro"
              variant="h3"
              color="black"
            >
              Bus List
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button
              className="flex items-center gap-3 bg-blackblue"
              size="md"
              onClick={() => addBus()}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Bus
            </Button>
          </div>
        </div>
      </Card>

      <div className="mx-3 h-[450px] w-[98%] mt-[1%]  bg-white relative overflow-scroll px-1">
        <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
          <thead className="z-10 font-semibold flex-col">
            <tr className="z-10 bg-GreenBlue text-white sticky top-0  w-full">
              <th className="w-[5px] p-2">Bus Photos</th>
              <th className="w-[5px] p-2">Bus Number</th>
              <th className="w-[5px] p-2">Bus Name</th>
              <th className="w-[5px] p-2">From</th>
              <th className="w-[5px] p-2">To</th>
              <th className="w-[5px] p-2 ">Available Date</th>
              <th className="w-[5px] p-2">Arrival Time</th>
              {/* <th className="w-[5px] p-2">Rest Point</th> */}
              <th className="w-[5px] p-2">Seats</th>
              <th className="w-[5px] p-2">Ticket Price</th>
              {/* <th className="w-[5px] p-2">Operator</th> */}
              {/* <th className="w-[5px] p-2">Current Status</th> */}
              <th className="w-[5px] p-2">Bus Type</th>
              <th className="w-[5px] p-2">Bus Stops</th>
              <th className="w-[5px] p-2">No of Stops</th>
              <th className="w-[5px] p-2">Booking Seats</th>
              <th className="w-[5px] p-2">Travel Agency</th>
              <th className="w-[5px] p-2">Duration</th>
              <th className="w-[5px] p-2">Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {busData
              ? busData?.items?.map((element: any) => (
                  <>
                    <tr className="border-b">
                      <td className="w-[5px] p-2">
                        <img
                          className="h-20 w-20 rounded-full"
                          src={"uploads/" + element.imageUrl}
                          alt="nature image"
                        />
                      </td>
                      <td className="w-[5px] p-2">{element.busnumber}</td>
                      <td className="w-[5px] p-2 font-semibold">
                        {element.busname}
                      </td>
                      <td className="w-[5px] p-2">{element.from}</td>
                      <td className="w-[5px] p-2">{element.to}</td>
                      <td className="w-[5px] p-2">{element.arrivalDate}</td>
                      <td className="w-[5px] p-2">{element.arrivalTime}</td>
                      {/* <td className="w-[5px] p-2">{element.pickUpPoint}</td> */}
                      <td className="w-[5px] p-2">{element.seats}</td>
                      <td className="w-[5px] p-2">{element.ticketprice}</td>
                      {/* <td className="w-[5px] p-2">{element.operator}</td> */}
                      {/* <td className="w-[5px] p-2">{element.currentStatus}</td> */}
                      <td className="w-[5px] p-2">{element.busType}</td>
                      <td className="w-[5px] p-2">{element.busstops}</td>
                      <td className="w-[5px] p-2">{element.noofstop}</td>
                      <td className="w-[5px] p-2">{element.bookingseats}</td>

                      <td className="w-[5px] p-2">
                        {element.travelagencyname}
                      </td>
                      <td className="w-[5px] p-2"> {element.duration}</td>
                      <td className="w-[5px] p-2 ">
                        <Tooltip content="Update Bus">
                          <IconButton
                            onClick={() => updateBus(element._id)}
                            variant="text"
                            color="blue-gray"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete Bus">
                          <IconButton
                            onClick={() => deleteBus(element._id)}
                            variant="text"
                            color="blue-gray"
                          >
                            <TrashIcon
                              className=" w-4 text-red-500"
                              onClick={() => alert("Bus Deleted")}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
                ))
              : "Data not found"}
          </tbody>
        </table>
      </div>
      <div className="bg-white ">
        <Pagination className="flex justify-center gap-5 p-3 text-gray-700">
          <div className="hover:text-black">
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={page === 1}
            />
          </div>
          <div className="hover:text-black">
            <Pagination.Prev
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            />
          </div>
          <div className="flex hover:text-black">
            {Array.from(Array(totalPages).keys()).map((pageIndex, index) => (
              <Pagination.Item
                key={index}
                active={pageIndex === page}
                onClick={() => handlePageChange(pageIndex)}
                disabled={page === 1}
              >
                {pageIndex}
              </Pagination.Item>
            ))}
          </div>

          <div className="hover:text-black">
            <Pagination.Next
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages - 1}
            />
          </div>
          <div className="hover:text-black">
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={page === totalPages}
            />
          </div>
        </Pagination>
      </div>
    </div>
  );
}
