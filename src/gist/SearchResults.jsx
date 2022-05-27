import React     from "react";
import { Alert } from "antd";
import { Cards } from "./Cards";
//--------------------IMPORTS------------------------------

export const SearchResults = (data, username) => {
  const userdata = data.data;
  // console.log("SearchResults | data = ", data);
  // console.log("SearchResults | username = ", username);
  // console.log("SearchResults | userdata = ", userdata);


  return (
    <>
      {username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            message={`${data.username}'s Gists`}
            description={`${userdata.length} Gists found`}
            type="success"
            showIcon
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <ul className="paddingData">
            {userdata.map((gist, index) => {
              return <Cards key={gist.id} gistData={gist} />;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};
