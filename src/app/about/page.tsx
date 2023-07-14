"use client"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function page() {

    return (
        <div className="font-signika mt-[30px] flex flex-col gap-3" >
            {/* <div className="flex items-center gap-2"> */}
            <Card className="h-[500px] flex items-center gap-2">
                <CardBody>
                    <RocketLaunchIcon className="text-red-500 w-12 h-12 mb-4" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        ABOUT
                    </Typography>
                    <Typography >
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum.
                        In the first place we have granted to God, and by this our present charter confirmed
                        for us and our heirs forever that the English Church shall be free, and shall have
                        her rights entire, and her liberties inviolate; and we will that it be thus observed;
                        which is apparent
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




