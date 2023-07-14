import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // req.body.action="MENU_LISt"
  switch (req.method) {
    case "GET":
      res.json({ status: 200, message: "Hotel Menus" });

    case "POST":
      if (req.body.action == "SAVE MENU") {
        res.json({ status: 200, message: "Menu saved succ" });
      } else {
        res.json({ status: 200, message: "N/A" });
      }
  }

  
}

