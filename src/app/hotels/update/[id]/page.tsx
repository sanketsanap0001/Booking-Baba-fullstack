"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";

import "../../../styles/hotel.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getHotelById, savePreviousData, updateHotel } from "@/redux/action/hotelaction";
import Multiselect from "multiselect-react-dropdown";
import {
  Basic_Facilities,
  Safety,
  food_facilities,
  general_services,
} from "@/utils/Data";

export default function UpdateHotel({ params }: any) {
  const [hotelname, setHotelname] = useState<String>("");
  const [adress, setAdress] = useState<String>("");
  const [street, setStreet] = useState<String>("");
  const [contactno, setContactNo] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [ownerName, setOwnerName] = useState<String>("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [file, setFile] = useState("");
  const [pool, setPool] = useState<boolean>(true);
  const [wifi, setWifi] = useState<boolean>(true);
  const [kids, setKids] = useState<boolean>(true);
  const [lunch, setLunch] = useState<boolean>(true);
  const [dinner, setDinner] = useState<boolean>(true);
  const [update, setUpdate] = useState("");
  

  const [country, setCountry] = useState("");
  const [food, setFood] = useState([]);
  const [basics, setBasics] = useState([]);
  const [generalService, setGeneral] = useState([]);
  const [safety, setSafety] = useState([]);

  const [selectedFoodName, setSelectedFoodName] = useState("Select foods & drinks");
  const [selectedFoodBasics, setSelectedFoodBasics] = useState("Select foods & drinks");
  const [selectedGeneral, setSelectedGeneral] = useState("Select General Servicess");
  const [selectedSafety, setSelectedSafety] = useState("Select Safety & Security");

  const dispatch = useAppDispatch();
  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router = useRouter();
  const hotelState = useSelector((state: any) => state.hotel);


  const select_food_facilities = (selectedList: any, selectedItem?: any) => {
    setFood(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodName(names.toString());
  };
  const remove_food_facilities = (selectedList: any, removedItem?: any) => {
    setFood(selectedList);
    console.log(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodName(names.toString());
  };


  const selectBasic_Facilities = (selectedList: any, selectedItem?: any) => {
    setBasics(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodBasics(names.toString());
    console.log(selectedList);
  };
  const removeBasic_Facilities = (selectedList: any, removedItem?: any) => {
    setBasics(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodBasics(names.toString());
  };


  const select_general_services = (selectedList: any, selectedItem?: any) => {
    setGeneral(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedGeneral(names.toString());
  };
  const remove_general_services = (selectedList: any, removedItem: any) => {
    setGeneral(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedGeneral(names.toString());
  };


  const select_safety = (selectedList: any, selectedItem?: any) => {
    setSafety(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedSafety(names.toString());
  };
  const remove_safety = (selectedList: any, removedItem: any) => {
    setSafety(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedSafety(names.toString());
  };

  useEffect(() => {
    dispatch(getHotelById(params.id));
  }, []);

  useEffect(() => {
    let hotel_data = hotelState.updateHotelDetails?.data;
    if (hotel_data) {
      const {
        adress,
        hotelname,
        ownerName,
        contactno,
        email,
        street,
        city,
        pin,
        food,
        basics,
        generalService,
        safety,
        
      } = hotel_data;

      setAdress(adress);
      setHotelname(hotelname);
      setOwnerName(ownerName);
      setContactNo(contactno);
      setEmail(email);
      setStreet(street);
      setCity(city);
      setPin(pin);
      // setFood(food)
      select_food_facilities(food || []);
      selectBasic_Facilities(basics || []);
      // setBasics(basics||[])
      // setGeneral(generalService||[])
      select_general_services(generalService || []);
      // setSafety(safety)
      select_safety(safety || []);

      // setFile(file)
    }
  }, [hotelState.updateHotelDetails])

  const updateHotelDetails = () => {
    let param = {
      _id: params.id,
      adress,
      hotelname,
      ownerName,
      contactno,
      email,
      street,
      city,
      pin,
      food,
      basics,
      generalService,
      safety,
      
    }
    let hotel_data = hotelState.updateHotelDetails?.data;
    dispatch(updateHotel(param)).then(() => {
      dispatch(savePreviousData(hotel_data));
      router.push("/hotels/updateRoom");
    })

  };

  return (
    <>
      <div className="bg-white h-[40%] pb-4 mt-5 m-auto w-[750px] justify-center rounded-lg">
        <div className="flex justify-center h-12 bg-[#4fb291] text-white px-5  text-2xl">
          <h1>Update Hotel Details</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-4 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Hotel Name"
              value={hotelname + ""}
              onChange={(e) => setHotelname(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Hotel Owner"
              value={ownerName + ""}
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Contact No"
              value={contactno + ""}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="email"
              label="Email"
              value={email + ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "w-[300px] mb-4" }}
              type="file"
              label="Hotel Photos"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
            {/* <BBInput
              containerProps={{ className: "" }}
              label="Latitude & Longitude"
              value={location} onChange={(e) => setLocation(location)}
            /> */}
          </div>
          <div className="flex  flex-col mx-5 w-[300px]">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Adress Line1"
              value={adress + ""}
              onChange={(e) => setAdress(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Adress Line2 & Street"
              value={street + ""}
              onChange={(e) => setStreet(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="PinCode"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-4 w-[300px] ">
            <div className="my-2 w-60  font-sm ">
              <Multiselect
                placeholder="Select Basic Facilities"
                options={Basic_Facilities}
                onSelect={selectBasic_Facilities}
                onRemove={removeBasic_Facilities}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
                selectedValues={Basic_Facilities}
              />
            </div>

            <div className="my-2 ">
              <Multiselect
                // placeholder={food?food[0]?.name  :"Select FooD & Drinks"}
                placeholder={selectedFoodName || "Select Food & Drinks"}
                options={food_facilities}
                onSelect={select_food_facilities}
                onRemove={remove_food_facilities}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
                selectedValues={food}
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder={selectedGeneral || "Select General Services"}
                options={general_services}
                onSelect={select_general_services}
                onRemove={remove_general_services}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
                selectedValues={generalService}
              />
            </div>

            <div className="my-2 w-60">
              <Multiselect
                placeholder={selectedSafety || "Select Safety & Security"}
                options={Safety}
                onSelect={select_safety}
                onRemove={remove_safety}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
                selectedValues={safety}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <BBButton
            color=""
            label="NEXT"
            size="lg"
            onClick={updateHotelDetails}
            className="h-12 bg-blackblue w-[500px] "
          />
        </div>
      </div>

      {/* <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      /> */}
    </>
  );
}
