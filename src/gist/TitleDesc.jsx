import React from 'react';
import { Typography } from "antd";
//--------------------IMPORTS------------------------------

const { Title } = Typography;

export const TitleDesc = () => {
  return (
    <div>
        <Title type="success">Search Gists by UserName</Title>
    </div>
  );
};
