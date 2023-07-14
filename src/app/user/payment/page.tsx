"use client"
import BBInput from '@/app/components/BBInput'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Payment() {

    const pay = () => {

    }

    return (
        <div className='bg-white mx-52 p-5 h-[700px]'>
            <div className='flex flex-row justify-between border-b border-gray-300 p-5'>
                <div className='text-xl '>
                    Total Payable Amount:$150
                </div>
                <div className='flex flex-col'>
                    <p className='text-xl'>Transaction ID: 25246584</p>

                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>

                    <div className='text-xl font-medium'>Enter Card Details</div>
                    <div className='mt-5'>
                        <p> Enter Debit / Credit Card Number</p>
                        <BBInput containerProps={{ className: "mt-3" }} label='Card Number' />
                    </div>

                    <div className='mt-5 grid grid-cols-3 gap-3'>
                        <div>
                            <p>Expiry Month</p>
                            <BBInput containerProps={{ className: "mt-3" }} label='Expriy Month' />
                        </div>
                        <div>
                            <p>Expiry Year</p>
                            <BBInput containerProps={{ className: "mt-3" }} label='Expriy Year' />
                        </div>
                        <div className=''>
                            <p>CVV</p>
                            <BBInput containerProps={{ className: "mt-3" }} label='CVV Number' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p> Card Holder Name</p>
                        <BBInput containerProps={{ className: "mt-3" }} label='Card Holder Name' />
                    </div>

                    <div className='flex mt-5 justify-center p-2'>
                        <Button type='submit' className=' border rounded-md
                     bg-[#0071cc] text-white w-[300px] h-12 ml-2 '
                            onClick={pay}> Proceed To Payment</Button>
                    </div>

                </div>

                <div>
                    bgfbhghy
                </div>
            </div>


        </div>
    )
}
