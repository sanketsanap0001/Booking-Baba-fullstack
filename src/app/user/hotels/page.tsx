"use client";
import BBButton from "@/app/components/BBButton";
import BBCheckbox from "@/app/components/BBCheckbox";
import BBDate from "@/app/components/BBDate";
import BBDropdown from "@/app/components/BBDropdown";
import BBInput from "@/app/components/BBInput";
import BBRating from "@/app/components/BBRating";
import BBSearch from "@/app/components/BBSearch";
import { FaBeer } from "react-icons/fa";
import { RiRestaurantFill } from "react-icons/ri";
import { BiWifi } from "react-icons/bi";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { BiSwim } from "react-icons/bi";
import { IoBusinessSharp, IoLocationSharp } from "react-icons/io5";
import { BiSpa } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { BiRupee } from "react-icons/bi";
import {
  getHotels,
  searchHotelByName,
  sortHotel,
} from "@/redux/action/hotelaction";
import { useAppDispatch } from "@/redux/store";
import {
  amenities,
  propert_type,
  star_category,
  user_review,
} from "@/utils/Data";

import { HandThumbUpIcon, WifiIcon } from "@heroicons/react/24/outline";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Checkbox,
  IconButton,
  checkbox,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HomeSearch from "@/components/HomeSearch";
import SearchComponent from "@/components/SearchComponent";
import Filter from "./filter/page";
import UBannerFooter from "@/components/userComponents/UBannerFooter";
import UFooter from "@/components/userComponents/UFooter";
import UHeader from "@/components/userComponents/UHeader";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0071cc"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface Props {
  type?: any;
}

export default function UserHotelPage() {
  const [type, setType] = useState("hotel");

  const [searchKey, setSearchKey] = useState("");
  const [name, setName] = useState("");
  const [no, setNo] = useState("");
  const [uemail, setUEmail] = useState("");
  const [sort, setSort] = useState("");
  const [date, setDate] = useState("");

  const hotelDataList: any = useSelector(
    (state: any) => state.hotel.hotelDetails
  );
  console.log("list data ;;;;;>>>>>>", hotelDataList);

  const [hotelData, setHotelData] = useState([]);
  const [filterData, setFilterData] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  useEffect(() => {
    setHotelData(hotelDataList);
  }, [hotelDataList]);

  const router = useRouter();

  //   const displayeAmenities = (rooms: any) => {
  //     let available_amenities = new Set();
  //     rooms?.map((room: any) => {
  //       room?.amenities?.map((amenity: any) =>
  //         available_amenities.add(amenity?.name)
  //       );
  //     });

  //     let name = Array.from(available_amenities).toString();
  //     return name;
  //   };

  const displayeAmenities = (rooms: any) => {
    let available_amenities = new Set();
    rooms?.map((room: any) => {
      room?.amenities?.map((amenity: any) =>
        available_amenities?.add(amenity.name)
      );
    });

    let name = Array.from(available_amenities).toString();
    return name;
  };

  const displayeView = (rooms: any) => {
    let available_view = new Set();
    rooms?.map((room: any) => {
      room?.view?.map((item: any) => available_view.add(item.name));
    });
    let name = Array.from(available_view).toString();
    return name;
  };

  const searchByName = (searchKey: any) => {
    dispatch(searchHotelByName(searchKey));
  };


  const datasort = [
    { label: "Popularity", value: "Select" },
    { label: "Low to High", value: "PRICE_LOW" },
    { label: "High to Low", value: "PRICE_HIGH" },
  ];
  // useEffect(() => {
  //   if (searchKey == "") {
  //     dispatch(getHotels());
  //   }
  // }, [searchKey]);

  useEffect(() => {
    if (sort == "Select") {
      dispatch(getHotels());
    }
    dispatch(sortHotel(sort));
  }, [sort]);

  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? "filled" : "text",
      color: active === index ? "blue" : "blue-gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 3) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const onChangeFilter = (data: any) => {
    let filterHotel = [];

    if (filterData == data) {
      //uncheck
      filterHotel = hotelDataList;
    } else {
      //check
      filterHotel = hotelDataList.filter((element: any) => {
        return element.property?.[0].name == data;
      });
    }
    setFilterData(data);
    setHotelData(filterHotel);
  };
  return (
    <>
      <UHeader
        header="Hotels - List Page"
        subHeader="Home > Hotels > Hotels List Page"
      />
      {hotelData ? (
        //  <div className="mt-4 ">
        <div className="mt-4 max-w-screen-xl mx-auto">
          <div className="  ">
            <SearchComponent travelType={type} />
          </div>
          <div className=" flex flex-row   gap-5">
            <Filter onChange={onChangeFilter} name="yograni" />
            <div>
              <div className="flex justify-between mt-2 p-1 border-b border-gray-400">
                <div className="mt-3 font-[18px]">Nashik</div>
                <div className="  ml-4 bg-[#FFFFFF] mb-2 ">
                  <BBDropdown
                    label="Sort By"
                    value={sort}
                    options={datasort}
                    onPress={(value) => {
                      setSort(value);
                    }}
                  />
                </div>
              </div>
              {hotelData?.map((element: any, index: any) => (
                <div className=" flex flex-row  w-[100%]">
                  <div
                    className="flex flex-row justify-center  bg-[#FFFFFF] mt-4 p-2 gap-5 rounded-md w-[100%]"
                    onClick={() =>
                      router.push("/user/hotels/hotelsDetail/" + element._id)
                    }
                  >
                    <div className="w-[30%]">
                      <img
                        className=" mx-3 my-3 w-[260px] h-[155px] hover:opacity-80 rounded-md"
                        src="/image/hotelde.jpg"
                        alt="img-blur-shadow"
                      />
                    </div>
                    <div className="mx-5 my-3 w-[50%]">
                      <h1 className="text-2xl rounded-lg">
                        {element.hotelname}
                      </h1>
                      {/* <p>Owner:{element.ownerName}</p> */}
                      <div className="mt-2 flex">
                        <p className="mr-2">
                          {" "}
                          <BBRating />
                        </p>

                        <p className="flex">
                          {" "}
                          <IoLocationSharp className="mr-1 mt-1  text-gray-500 " />
                          {element.adress} {element.street}
                        </p>
                      </div>
                      {/* <p>
                    {element.adress} {element.street}
                  </p> */}
                      <div className="flex mt-2">
                        <BiWifi className=" text-xl  text-gray-600" />
                        <RiRestaurantFill className="ml-3 text-xl  text-gray-500 " />
                        <FaGlassMartiniAlt className="ml-3  text-xl  text-gray-500" />
                        <BiSwim className="ml-3  text-xl  text-gray-500" />
                        <IoBusinessSharp className="ml-2  text-xl  text-gray-500" />
                        <BiSpa className="ml-3  text-xl  text-gray-500" />
                        <CgGym className="ml-3  text-xl  text-gray-500" />
                      </div>
                      <p className="mt-2">
                        Min Price- {element.min_order_price}{" "}
                      </p>
                      <p>contact :{element.contactno}</p>
                    </div>
                    <div className=" flex flex-col pr-2 w-[20%] ">
                      <p className=" flex justify-end content-end text-2xl font-semibold mt-16">
                        <BiRupee className="mt-1" />
                        {element.min_order_price}
                      </p>
                      <p className=" flex justify-end content-end mb-3">
                        1 Room/Night
                      </p>
                      <div className=" flex justify-end content-end">
                        <Button
                          type="button"
                          className="hover- border rounded-lg 
                    bg-[#0071cc] border-gray-500 text-white ml-2 h-10 w-[100px]"
                          onClick={() => searchByName(searchKey)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ................ */}

          <div className="flex justify-center items-center gap-4 mt-5">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === 3}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white flex flex-col justify-center my-5">
            <UBannerFooter />
          </div>
          <div className="mb-10">
            <UFooter />
          </div>
        </div>
      ) : (
        <p>Data Not Found...</p>
      )}
    </>
  );
}
