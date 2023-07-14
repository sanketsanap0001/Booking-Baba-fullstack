"use client"
import React, { useEffect, useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Checkbox, checkbox } from "@material-tailwind/react";
import { Button } from 'react-bootstrap';
import BBInput from '@/app/components/BBInput';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/store';
import { getHotels, searchHotelByName } from '@/redux/action/hotelaction';
import { amenities, propert_type, star_category, user_review } from '@/utils/Data';
import BBDropdown from '@/app/components/BBDropdown';

function Icon({ id, open }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
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

export default function Filter({onChange,name}:any) {

    const datasort = [
        { label: "No Sort", value: "Select" },
        { label: "Low to High", value: "Low to High" },
        { label: "High to Low", value: "Low to High" },
      ];
    
    const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
    const dispatch = useAppDispatch();

    const [searchKey, setSearchKey] = useState("");
    const [sort, setSort] = useState("")
    const [date, setDate] = useState("")
    const [open, setOpen] = useState(1);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const searchByName = (searchKey: any) => {
        dispatch(searchHotelByName(searchKey));
    };
    useEffect(() => {
        if (searchKey == "") {
          dispatch(getHotels());
        }
      }, [searchKey]);
    
    return (
        <div className=" bg-[#FFFFFF] mt-4 ml-4 w-[270px] h-full rounded-md">
            <div>
              <p className="text-[#0c2F54]  text-2xl  mt-3 ml-4 border-0 p-2"> Filter</p>
            </div>
            <hr />

            <div >
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />} >
                <AccordionHeader onClick={() => handleOpen(1)} className="border-0 pr-5" >
                  {/* <p className=" mt-3 ml-4  border-0"> Hotel Name</p> */}
                  <h2 className="p-2"
                    style={{
                      fontFamily: "Poppins ,sans-serif",
                      //  color: "#0071cc",
                      fontSize: "16px",
                      marginLeft: "10px"
                    }}
                  >
                    Hotel Name
                  </h2>
                </AccordionHeader>
                <AccordionBody>
                  <div className="   ml-4 p-1 flex ">
                    <div className="w-[180px]  ">
                      <BBInput
                        type="search"
                        label="Search .."
                        value={searchKey}
                        onChange={(e) => {
                          setSearchKey(e.target.value);
                        }}
                      />
                    </div>
                    <div className="">
                      <Button
                        type="button"
                        className="hover- border rounded-lg 
                    bg-[#0071cc] text-white border-gray-500  ml-2 h-10 w-[60px]"
                        onClick={() => searchByName(searchKey)}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            </div><hr />

            <div>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />} >
                <AccordionHeader onClick={() => handleOpen(2)} className="border-0 pr-5" >
                  {/* <p className="text-lg  mt-3 ml-4  text-light-blue-800"> Price</p> */}
                  <h2 className="p-2"
                    style={{
                      fontFamily: "Poppins ,sans-serif",
                      //  color: "#0071cc",
                      fontSize: "16px",
                      marginLeft: "10px"
                    }}
                  >
                    Price
                  </h2>
                </AccordionHeader>
                <AccordionBody>
                  <div className="  ml-4 w-[200px] ">
                    {/* <BBDropdown
                      label="Sort By"
                      value={sort}
                      options={datasort}
                      onPress={(value) => {
                        setSort(value);
                      }}
                    /> */}
                  </div>
                </AccordionBody>
              </Accordion>
            </div> <hr />
            <div>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />} >
                <AccordionHeader onClick={() => handleOpen(3)} className="border-0 pr-5" >
                  {/* <p className="text-lg  mt-3 ml-4  text-light-blue-800  "> Property Type</p> */}
                  <h2 className="p-2"
                    style={{
                      fontFamily: "Poppins ,sans-serif",
                      //  color: "#0071cc",
                      fontSize: "16px",
                      marginLeft: "10px"
                    }}
                  >
                    Property Type
                  </h2>
                </AccordionHeader>
                <AccordionBody>
                  {propert_type.map((element) =>
                    <div className=" " >
                      <Checkbox label={element.name} onClick={()=>onChange(element.name)}/>
                    </div>

                  )}
                </AccordionBody>
              </Accordion>
            </div> <hr />

            <div>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />} >
                <AccordionHeader onClick={() => handleOpen(4)} className="border-0 pr-5" >
                  {/* <p className="text-lg  mt-3 ml-4  text-light-blue-800 my-3 "> Start Category</p> */}
                  <h2 className="p-2"
                    style={{
                      fontFamily: "Poppins ,sans-serif",
                      //  color: "#0071cc",
                      fontSize: "16px",
                      marginLeft: "10px"
                    }}
                  >
                    Star Category
                  </h2>
                </AccordionHeader>
                <AccordionBody>
                  {star_category.map((element) =>
                    <div className="" >
                      <Checkbox label={element.name} />
                    </div>

                  )}
                </AccordionBody>
              </Accordion>

            </div> <hr />

            <div>
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />} >
                <AccordionHeader onClick={() => handleOpen(5)} className="border-0 pr-5" >
                  {/* <p className="text-lg  mt-3 ml-4  text-light-blue-800 my-3 "> User Revies</p> */}
                  <h2 className="p-2"
                    style={{
                      fontFamily: "Poppins ,sans-serif",
                      //  color: "#0071cc",
                      fontSize: "16px",
                      marginLeft: "10px"
                    }}
                  >
                    User Review
                  </h2>
                </AccordionHeader>
                <AccordionBody>
                  {user_review.map((element) =>
                    <div className=" " >
                      <Checkbox label={element.name} />
                    </div>

                  )}
                </AccordionBody>
              </Accordion>
            </div> <hr />
            <div>
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />} >
                <AccordionHeader onClick={() => handleOpen(6)} className="border-0 pr-5" >
                  {/* <p className="text-lg  mt-3 ml-4  text-light-blue-800 my-3 "> Amenities</p> */}
                  <h2 className="p-2"
                    style={{
                      fontFamily: "Poppins ,sans-serif",
                      //  color: "#0071cc",
                      fontSize: "16px",
                      marginLeft: "10px"
                    }}
                  >
                    Amenities
                  </h2>
                </AccordionHeader>
                <AccordionBody>
                  {amenities.map((element) =>
                    <div className=" " >
                      <Checkbox label={element.name} />
                    </div>

                  )}
                </AccordionBody>
              </Accordion>

            </div> <hr />
          </div>
    )
}
