
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="grid grid-cols-6 gap-4 bg-white  m-auto my-4 px-4 w-[60%]">
                <div className='bg-red-700 '>01</div>
                <div className='bg-purple-400'>02</div>
                <div className='bg-pink-500'>03</div>
                <div className='bg-blue-600'>04</div>
                <div className="col-start-2 col-end-5 bg-orange-300">04</div>
                <div className="bg-blue-gray-600 md:col-span-4">05</div>
                <div className="bg-purple-800">06</div>
                <div className=" bg-green  hover:col-span-5">07</div>
                <div className='bg-blue-600'>04</div>
            </div>


            <div>

                <div className="grid grid-rows-3 grid-flow-col bg-deep-orange-300 mt-12  py-4  gap-4 w-[60%] text-center">
                    <div className='bg-purple-400 text-center'>01</div>
                    <div className='bg-red-700  text-center'>01</div>
                <div className='bg-purple-400 text-center'>02</div>
                <div className='bg-pink-500 text-center'>03</div>
                <div className='bg-blue-600 text-center'>04</div>
                <div className='bg-red-700  text-center'>01</div>
                <div className='bg-purple-400'>02</div>
                <div className='bg-pink-500'>03</div>
                <div className='bg-blue-600'>04</div>

                    <div className='bg-blue-600'>094</div>
                </div>




            </div>

        </div>

    )
}
