"use client";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

export default function page() {
  const [addName, setAddName] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");
  const [file, setFile] = useState<any>();

  const onFile = (e: any) => {
    const inputFile = e.target.files[0];
    console.log("input file ", inputFile);
    setFile(inputFile);
  };

  const onSubmit = (e: any) => {};

  return (
    <div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Adding Advertisement Train
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Advertised Name"
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
            />
            <Input
              type="text"
              size="lg"
              label="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <Typography variant="h4" color="blue-gray">
              {"40% Off "}
            </Typography>
            <Input type="file" size="lg" onChange={onFile} />
          </div>

          <Button className="mt-6" fullWidth onClick={(e) => onSubmit}>
            Add Advertised
          </Button>
        </form>
      </Card>
    </div>
  );
}
