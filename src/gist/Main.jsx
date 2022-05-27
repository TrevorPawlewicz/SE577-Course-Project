import React         from "react";
import { TitleDesc } from "./TitleDesc";
import { SearchBar } from "./SearchBar";
import { Divider }   from "antd";
//--------------------IMPORTS------------------------------

const Main = () => (
  <>
    <div>
      <TitleDesc />
      <Divider />
      <SearchBar />
    </div>
  </>
);

export default Main;
