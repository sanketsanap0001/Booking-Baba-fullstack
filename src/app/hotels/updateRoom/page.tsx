"use client";
import BBButton from "@/app/components/BBButton";

import { updateHotel } from "@/redux/action/hotelaction";
import { useAppDispatch } from "@/redux/store";
import { essential_Kit, options_view, room_amenities } from "@/utils/Data";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Option, Radio, Select, Spinner } from "@material-tailwind/react";
import Multiselect from "multiselect-react-dropdown";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function UpdateRoom({params}:any) {

    const { previousHotelData, loading }: any = useSelector((state: any) => state.hotel);
  console.log("hotel data is ..", previousHotelData);
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const [view, setView] = useState([])
  // const [amenities, setAmenities] = useState([])
  // const [essentialKit, setEssentialKit] = useState([])
  const [roomDetails, setRoomDetails] = useState([
    { id: 1, no_of_bed: 0, price: "", isAC: false, no_rooms: "" ,view:[], amenities:[],essentialKit:[]},
  ]);


  let data = [
    { lable: 'Single Bed', value: 1 },
    { lable: 'Double Bed', value: 2 },
    { lable: 'Triple Bed', value: 3 },
    { lable: 'King Bed', value: 4 },
    { lable: 'Queen Bed', value: 5 },

  ]
  const selectOption_view = (index:number,selectedList: any, selectedItem: any) => {
    let data = [...roomDetails];
    data[index].view = selectedList;
    setRoomDetails(data);
  }
 const getSelectedViews=(index:number)=>{
   let names = roomDetails[index]?.view?.map((element: any) => element.name)
   if(names && names.length>0)
   return names.toString()
   else
   return "Select Room View"
  }
 
 
  const selectRoomAmenities = (index:number,selectedList: any, selectedItem: any) => {
    let data = [...roomDetails];
    data[index].amenities= selectedList;
    setRoomDetails(data);
   }
  const getSelectedAmenities=(index:number)=>{
    let names = roomDetails[index]?.amenities?.map((element: any) => element.name)
    if(names && names.length>0)
    return names.toString()
    else
    return "Select BedRoom Amenities"
   }

  
  const selectEssential_Kit = (index:number,selectedList: any, selectedItem: any) => {
    let data = [...roomDetails];
    data[index].essentialKit= selectedList;
    setRoomDetails(data);
  }
 const getSelectedKit=(index:number)=>{
  let names = roomDetails[index]?.essentialKit?.map((element: any) => element.name)
    if(names && names.length>0)
    return names.toString()
    else
    return "Select Essential Kit"
 }
   
 const setOptionValue = (index: number, value: number) => {
    let data = [...roomDetails];
    data[index].no_of_bed = value;
    setRoomDetails(data);
  };

  const setPriceValue = (index: number, value: string) => {
    let data = [...roomDetails];
    data[index].price = value;
    setRoomDetails(data);
  };

  const setAcStatus = (index: number, value: boolean) => {
    console.log(value)
    let data = [...roomDetails];
    data[index].isAC = value;
    setRoomDetails(data);
  };

  const setRoomsCount = (index: number, value: string) => {
    let data = [...roomDetails];
    data[index].no_rooms = value;
    setRoomDetails(data);
  };


  const addMore = () => {
    let data = [...roomDetails];
    data.push({ id: data.length + 1, no_of_bed: 0, price: "", isAC: false, no_rooms: "",view:[], amenities:[],essentialKit:[] });
    setRoomDetails(data);
    console.log(data);
  };

  const updateHotelsDetails = () => {
    let data = { ...previousHotelData }
    data.rooms= roomDetails
   debugger;
  // data["rooms"]=roomDetails
    console.log(data)
    dispatch(updateHotel(data));
    // router.push("/hotels")
  }

  const deleteRoom = (index: number) => {
    let data = [...roomDetails]
    data.splice(index, 1)
    setRoomDetails(data)

  }
  const getSelectedBde=(no_of_bed:any)=>{
   let filterData=data.filter((element)=> element.value==no_of_bed)
   if(filterData.length>0){
    return filterData[0].lable
   }
  }

  useEffect(() => {
    let hotel_data = previousHotelData
   
    if (hotel_data) {
    // const {view,amenities,essentialKit} = hotel_data
      setRoomDetails(hotel_data.rooms||roomDetails)
    
    }
  }, [previousHotelData])
 
 return loading ? (
   <Spinner />
 ) : (
   <div className="bg-white h-full  mt-5 m-auto w-[700px] justify-center pb-1">
     <div className="flex flex-row h-12  bg-[#1B6CA8] text-white px-5  text-xl  justify-between">
       <p className="mt-4">Update Hotel Rooms</p>
       <PlusIcon className=" w-6" onClick={addMore} />
     </div>
     <div className="flex flex-col justify-center mt-5 align-middle">
       {roomDetails &&
         roomDetails.length > 0 &&
         roomDetails.map((element: any, index: number) => (
           <div className="m-auto" key={index}>
             <div className=" flex flex-row  justify-between">
               <p className="font-medium "> Add Room {element.id} </p>
               <TrashIcon
                 className=" w-5 text-red-500"
                 onClick={() => deleteRoom(index)}
               />
             </div>
             <div className=" flex flex-row  justify-center">
               <div className="flex  flex-col mx-4 w-[300px]">
                 <div className="my-2 w-72">
                   <Select
                     label="Select Bed"
                     value={getSelectedBde(element.no_of_bed)}
                   >
                     {data.map((item: any) => (
                       <Option
                         value={item.value}
                         onClick={() => setOptionValue(index, item.value)}
                       >
                         {item.lable}
                       </Option>
                     ))}
                   </Select>
                 </div>
                 <div className="my-2 w-72">
                   <Input
                     label="Price"
                     value={element.price}
                     onChange={(e) => setPriceValue(index, e.target.value)}
                   />
                 </div>

                 <div className="my-2 w-72">
                   <Input
                     label="No of Rooms Available"
                     value={element.no_rooms}
                     onChange={(e) => setRoomsCount(index, e.target.value)}
                   />
                 </div>

                 <div className="flex gap-10">
                   <Radio
                     checked={element.isAC}
                     name={"air-condition" + element.id}
                     label="AC"
                     onClick={(e) => setAcStatus(index, true)}
                   />
                   <Radio
                     checked={element.isAC}
                     name={"air-condition" + element.id}
                     label="Non AC"
                     onClick={(e) => setAcStatus(index, false)}
                   />
                 </div>
               </div>

               <div className="flex  flex-col mx-4 w-[300px]">
                 <div className="my-2 w-72">
                   <Multiselect
                     placeholder={getSelectedViews(index)}
                     options={options_view}
                     onSelect={(selectedList, selectedItem) =>
                       selectOption_view(index, selectedList, selectedItem)
                     }
                     onRemove={(selectedList, selectedItem) =>
                       selectOption_view(index, selectedList, selectedItem)
                     }
                     displayValue="name"
                     avoidHighlightFirstOption={true}
                     showCheckbox={true}
                     hideSelectedList={true}
                   />
                 </div>
                 <div className="my-2 w-72">
                   <Multiselect
                     placeholder={getSelectedAmenities(index)}
                     options={room_amenities}
                     onSelect={(selectedList, selectedItem) =>
                       selectRoomAmenities(index, selectedList, selectedItem)
                     }
                     onRemove={(selectedList, selectedItem) =>
                       selectRoomAmenities(index, selectedList, selectedItem)
                     }
                     displayValue="name"
                     avoidHighlightFirstOption={true}
                     showCheckbox={true}
                     hideSelectedList={true}
                   />
                 </div>
                 <div className="my-2 w-72">
                   <Multiselect
                     placeholder={getSelectedKit(index)}
                     options={essential_Kit}
                     onSelect={(selectedList, selectedItem) =>
                       selectEssential_Kit(index, selectedList, selectedItem)
                     }
                     onRemove={(selectedList, selectedItem) =>
                       selectEssential_Kit(index, selectedList, selectedItem)
                     }
                     displayValue="name"
                     avoidHighlightFirstOption={true}
                     showCheckbox={true}
                     hideSelectedList={true}
                   />
                 </div>
               </div>
             </div>
           </div>
         ))}
     </div>
     <></>
     <BBButton
       label="Update"
       size="lg"
       onClick={updateHotelsDetails}
       className="h-12 bg-blackblue hover:bg-GreenBlue w-[300px]  flex justify-center m-auto mb-5"
     />
   </div>
 );
}
