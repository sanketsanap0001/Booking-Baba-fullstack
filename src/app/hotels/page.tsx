"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
  Tooltip,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import { useAppDispatch } from "@/redux/store";
import { ADD_HOTELS_DATA } from "@/redux/constant";
import { useSelector } from "react-redux";
import {
  deleteHotelById,
  getHotelById,
  getHotels,
} from "@/redux/action/hotelaction";
import { data } from "autoprefixer";
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

export default function Hotels() {
  const [page, setPage] = useState<any>(1);
  const [totalItems, setTotalItems] = useState<any>();
  const [items, setItems] = useState<any>([]);
  const [totalPages, setTotalPages] = useState<any>();

  const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
  // console.log("hotel data is ..==>>>>", hotelData?.data);
  const dispatch = useAppDispatch();

  // const [hotel, setHotel] = useState<any>("");
  console.log(" using usestate hotel data is ..", hotelData);

  useEffect(() => {
    if (hotelData) {
      const { page, totalItems, totalPages, items } = hotelData;
      setPage(page);
      setTotalItems(totalItems);
      setTotalPages(totalPages);
      setItems(items);
    }
  }, []);

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };

  const deleteHotel = (id: string) => {
    dispatch(deleteHotelById(id)).then(() => {
      dispatch(getHotels());
    });
  };

  const router = useRouter();

  return (
    <div className="tracking-wide">
      <Card className="w-full mt-[0.5%]">
        <div className="flex p-1 px-2 items-center justify-between rounded-none">
          <div className="flex items-center justify-center ">
            <Typography
              className="px-4 font-castoro"
              variant="h3"
              color="black"
            >
              Hotels List
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* <Tabs
            value="all"
            className="w-full sm:w-max text-black   font-castoro"
          >
            <TabsHeader
              className=" z-0"
              indicatorProps={{
                className: "bg-[#4fb291] shadow-none ",
              }}
            >
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs> */}
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button
              className="flex items-center gap-3 bg-blackblue"
              size="md"
              onClick={() => router.push("/hotels/add-step1")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New
              Hotels
            </Button>
          </div>
        </div>
      </Card>

      <div className="mx-3 h-[450px] w-[98%] mt-[0.5%] bg-white relative overflow-scroll px-1">
        <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
          <thead className="z-10 bg-blue-gray-100 font-bold flex-col">
            <tr className="z-10 sticky top-0 bg-GreenBlue text-white w-full ">
              <th className="w-[5px] p-2 ">Hotel Photos</th>
              <th className="w-[5px] p-2">Hotel Name /Email</th>
              <th className="w-[5px] p-2">Hotel Owner</th>
              <th className="w-[5px] p-2">Contact No</th>
              <th className="w-[5px] p-2">Address/Street</th>
              <th className="w-[5px] p-2">City </th>
              <th className="w-[5px] p-2">Country</th>
              <th className="w-[5px] p-2">PinCode</th>
              <th className="w-[5px] p-2">Admin Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotelData
              ? hotelData?.map((element: any) => (
                  <>
                    <tr className="border-b border-b-gray-400 hover:bg-gray-300 hover:scale-[1.004] focus:scale-[1.004] active:scale-100">
                      <td className="w-[5px] p-2">
                        <Avatar
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnWFevA5oNiWzj1bPoiiq71JaH6LhsIrmEQ&usqp=CAU"
                          alt="imagee"
                          size="md"
                        />
                      </td>

                      <td className="w-[5px] p-2">
                        <tr className="font-semibold">{element.hotelname}</tr>
                        {element.email}
                      </td>
                      <td className="w-[5px] p-2">{element.ownerName}</td>
                      <td className="w-[5px] p-2">{element.contactno}</td>
                      <td className="w-[5px] p-2">
                        <tr>{element.adress}</tr>
                        {element.street}
                      </td>
                      <td className="w-[5px] p-2">{element.city}</td>
                      <td className="w-[5px] p-2">{element.country}</td>
                      <td className="w-[5px] p-2">{element.pin}</td>
                      <td className="w-[5px] p-2">
                        <Tooltip content="Update Hotel Details">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            className="hover:bg-gray-500"
                            onClick={() =>
                              router.push("/hotels/update/" + element._id)
                            }
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete Hotels">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            className="hover:bg-gray-500"
                            onClick={() => deleteHotel(element._id)}
                          >
                            <TrashIcon
                              className=" w-4 text-red-500"
                              onClick={() => alert("Hotel Deleted")}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
                ))
              : "Data Not Found.."}
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
