import { IncomingForm } from "formidable";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: any, res: any) => {
  const getFileExtension = (name: string) => {
    let newName: string = name?.substring(name?.lastIndexOf("."), name?.length);
    return newName;
  };

  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files: any) => {
      console.log("api call");

      if (err) return reject(err);

      console.log(
        "::::::::::::::::::::::::::: ",
        fields.TheName + "AND" + fields.xxx
      );

      var oldPath = files.file.filepath;

      let extension = getFileExtension(files.file.originalFilename);

      let newName: any = Date.now() + "" + extension;

      var newPath = `./public/files/${newName}`;
      mv(oldPath, newPath, function (err: any) {
        console.log("error is ", err);
        console.log("rs ", mv);
      });
      return res.status(200).json({ fields, files, newName });
    });
  });
};
