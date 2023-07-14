
"use client"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function page() {

    return (
        <div className="   justify-center items-center" >
            <Card className="h-[500px] flex m-5 items-center gap-2 ">
                <CardBody>
                    <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        help
                    </Typography>
                    <Typography>
                        Most of the SaaS companies I reviewed include customer
                        support (help & knowledge base) options on their contact page and link
                        to the contact page in the header or footer. There is a fairly
                        even split amongst the 13 applications, half in the header and
                        half in the footer (with a couple opting for both locations).
                        Which should you use? The header is often more visually prominent,
                        but usability studies show that fat footer link blocks are easily
                        found (and used) too.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Learn More
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
}




