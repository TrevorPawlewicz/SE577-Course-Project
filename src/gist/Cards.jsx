import React, { useState }            from "react";
// import { getGistUrl }                 from "./config";
import { Card, Button, Tag, Divider } from "antd";
import { FileBox }                    from "./FileBox";
//--------------------IMPORTS------------------------------

export const Cards = (gistData) => {
  const unidata = gistData.gistData;
  const filez = unidata.files;
  const fileArr = [];

  for (let file in filez) {
    let language = filez[file].language;
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  const noOfFiles = Object.keys(filez).length;

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  // const moreOpen = async (value) => {
  //   if (value !== "") {
  //     try {
  //       const URL = getGistUrl(value);
  //       const res = await fetch(URL);
  //       const data = await res.json();
  //       setData(data);
  //       setShow(true);
  //     } catch (error) {
  //       console.log("ERROR! ----> ", error.message);
  //       setShow(false);
  //     }
  //   }
  // };
  return (
    <div className="site-card-wrapper">
      <Card
        title={unidata.description || "No Description"}
        bordered={true}
      >
        <p className="numberFiles">
          {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
        </p>

        <div>
          {fileArr.map((language, index) => {
            return (
              <Tag color="cyan" key={index}>
                {language}
              </Tag>
            );
          })}
        </div>

        <FileBox filelist={filez} />
      </Card>

      <Divider dashed/>
    </div>
  );
};
