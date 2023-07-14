"use client";
import BBButton from "@/app/components/BBButton";
import BBDropdown from "@/app/components/BBDropdown";
import BBInput from "@/app/components/BBInput";
import { getBusBySearch } from "@/redux/action/busaction";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import Select from "react-select";
import React from "react";
import { useState } from "react";
// import Bus from "./list/page";
import bus from "../../../images/Buses/carousel/bus_bg.jpg";

export default function BookBus() {
  const [from, setFrom] = useState<any>("");
  const dispatch = useAppDispatch();
  const [to, setTo] = useState<any>();
  const router = useRouter();
  const [showBox, setShowBox] = useState<Boolean>(false);

  function getDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month: any = today.getMonth() + 1;
    let day: any = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }
  const options = [
    { value: "Nashik", label: "Nashik" },
    { value: "Pune", label: "Pune" },
    { value: "Mumbai", label: "Mumbai" },
  ];

  const routeData = [
    { value: "Nashik", label: "Nashik" },
    { value: "Pune", label: "Pune" },
    { value: "Sinnar", label: "Sinnar" },
    { value: "Sangamner", label: "Sangamner" },
    { value: "Alephata", label: "Alephata" },
    { value: "Narayangaon", label: "Narayangaon" },
    { value: "Nashik Phata", label: "Nashik Phata" },
  ];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (from || to) {
      let data = { from: from.value, to: to.value };
      dispatch(getBusBySearch(data)).then((res: any) => {
        console.log("response  bus     ???????????????????????", res);

        setShowBox(true);
        router.push("/user/bus");
        // router.push("/user/bus/list");
      });
    }
  };

  const handleChangeFrom = (e: any) => {
    console.log("from value is ", e.target.value);
  };

  const handleChangeTo = (e: any) => {
    console.log("from value is ", e.target.value);
  };
  return (
    <div>
      <div className=" -z-10 h-[280px] pt-5 bg-GreenBlue max-w-full">
        <div className="flex flex-row">
          {/* <Image src={train} alt="sdc" className="h-[150px]" />
           <Image src={train1} alt="fgvhbj" className="h-[150px] w-[400px]" />
           <Image src={payment} alt="fgvhbj" className="h-[150px] w-[400px]" />
           <Image src={agent} alt="fgvhbj" className="h-[150px] w-[400px]" /> */}
        </div>
      </div>
      <div
        className="z-10 -mt-[80px] w-[90%]  h-[350px] bg-white m-auto rounded-2xl"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <h1 className="text-2xl font-Signika py-4 ml-10 flex gap-5">
          {/* <SiRailway
             size={50}
             color=""
             className="bg-white  text-GreenBlue  rounded-full"
           />{" "} */}
          <span className="flex items-center">Train Ticket Booking</span>
        </h1>
        <form className="" onSubmit={handleSubmit}></form>
        <div className="  flex flex-row gap-5 mx-10">
          <div className="dropdown-container w-[80%]">
            <Select
              options={routeData}
              value={from}
              onChange={(value: any) => setFrom(value)}
              isSearchable={true}
              placeholder="From Destination..."
            />
          </div>

          <div className=" w-[80%]">
            <Select
              options={routeData}
              value={to}
              onChange={(value: any) => setTo(value)}
              isSearchable={true}
              placeholder="To Source..."
            />
          </div>
          {/* <div className=" bg-white w-[80%]"> */}

          <a href="#pagee">
            <ul>
              <BBButton
                color=""
                label="Search Buses"
                size="lg"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className=" shadow h-10 w-[80%] bg-blackblue flex items-center justify-center hover:bg-GreenBlue "
              />
            </ul>
          </a>
        </div>
        <div className="flex flex-row justify-center pt-3 ">
          {/* {/* <Image src={t1} alt="sdc" className="h-[150px] w-[35%]" /> */}
          {/* <Image src={bus} alt="fgvhbj" className="h-[150px] w-[35%]" /> */}
          {/* <Image src={payment} alt="fgvhbj" className="h-[180px] w-[400px]" />
           <Image src={agent} alt="fgvhbj" className="h-[180px] w-[400px]" /> */}
        </div>
        <section className="pt-10" id="pagee">
          {showBox == false ? "" : "<Bus />"}
        </section>
      </div>
    </div>
  );
}

//     <div className="card pt-2 pr-96 pl-96 ">
//       <div className="card width-[50%] bg-white flex flex-col items-center justify-center h-[500px] ">
//         <img
//           src="data:image/jpeg;base64,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"
//           alt="sadf"
//         ></img>
//         <h1 className="text-3xl font-Signika mb-4">Bus Ticket Booking</h1>
//         <form className="" onSubmit={handleSubmit}>
//           <div className="mr-2   flex gap-5">
//             <div className="dropdown-container ml-2 flex-1">
//               <Select
//                 options={routeData}
//                 value={from}
//                 onChange={(value: any) => setFrom(value)}
//                 isSearchable={true}
//                 placeholder="From Destination..."
//               />
//             </div>
//             <div className="dropdown-container ml-2 flex-1">
//               <Select
//                 options={routeData}
//                 value={to}
//                 onChange={(value: any) => setTo(value)}
//                 isSearchable={true}
//                 placeholder="To Source..."
//               />
//             </div>
//           </div>
//           <div className="flex mb-1"></div>

//           <BBButton
//             color=""
//             label="Search Buses"
//             size="lg"
//             onClick={(e) => {
//               handleSubmit(e);
//             }}
//             className="h-10 bg-blackblue w-[500px] "
//           />
//         </form>
//       </div>
//     </div>
//   );
// }
